import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef();

  const data = [
    {
      lable: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      lable: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "gray",
      },
    },
    {
      lable: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      lable: "Forth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      lable: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  function handleScrollToSection() {
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3rem",
        paddingBlock: "1rem",
      }}
    >
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSection}>Click To Scroll</button>
      {data.map((dataItem, index) => (
        <div ref={index === 3 ? ref : null} key={index} style={dataItem.style}>
          <h3>{dataItem.lable}</h3>
        </div>
      ))}
    </div>
  );
}
