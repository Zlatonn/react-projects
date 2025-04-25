import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndButtom() {
  const { data, pending, error } = useFetch("https://dummyjson.com/products?limit=100", {});

  const buttomRef = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToButtom() {
    buttomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (error) {
    return <h1>Error occured ! Please try again</h1>;
  }
  if (pending) {
    return <h1>Loading ! Please wait</h1>;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3rem",
        padding: "1rem",
      }}
    >
      <h1>Scroll To Top And Buttom Feature</h1>
      <h3>This is top section</h3>
      <button onClick={handleScrollToButtom}>Scroll To Buttom</button>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {data && data.products && data.products.length ? data.products.map((item) => <li key={item.id}>{item.title}</li>) : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <h3 ref={buttomRef}>This is buttom section</h3>
    </div>
  );
}
