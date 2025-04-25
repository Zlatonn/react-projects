import { useEffect, useState } from "react";
import Suggesstions from "./suggesstions";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleClick(event) {
    setSearchParam(event.target.innerText);
    setShowDropDown(false);
    setFilteredUsers([]);
  }

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData = users && users.length ? users.filter((item) => item.toLowerCase().indexOf(query) > -1) : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div
      className="search-auto-complete-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        marginBlock: "5rem",
      }}
    >
      <h1>Search Auto Complete</h1>
      {loading ? (
        <h1>Loading Data ! Please wait</h1>
      ) : (
        <>
          <input value={searchParam} onChange={handleChange} name="search-users" placeholder="Search user here..." />
          {showDropDown && <Suggesstions handleClick={handleClick} data={filteredUsers} />}
        </>
      )}
    </div>
  );
}
