/* eslint-disable react/prop-types */
export default function Suggesstions({ data, handleClick }) {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li key={index} onClick={handleClick} style={{ cursor: "pointer", listStyle: "none" }}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}
