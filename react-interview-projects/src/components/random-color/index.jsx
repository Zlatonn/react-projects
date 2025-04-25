import { useEffect, useState } from "react";

export default function GenerateRandomColor() {
  const [color, setColor] = useState("#000");
  const [typeColor, setTypeColor] = useState("hex");

  function randomColorCode(length) {
    return Math.floor(Math.random() * length);
  }

  function handleGenerateHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorCode(hex.length)];
    }
    setColor(hexColor);
  }

  function handleGenerateRgbColor() {
    const r = randomColorCode(256);
    const g = randomColorCode(256);
    const b = randomColorCode(256);

    const rgb = `rgb(${r},${g},${b})`;
    setColor(rgb);
  }

  useEffect(() => {
    if (typeColor === "hex") {
      handleGenerateHexColor();
    } else {
      handleGenerateRgbColor();
    }
  }, [typeColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "5rem",
        color: "#fff",
        background: color,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={() => setTypeColor("hex")}>Create Hex Color</button>
        <button onClick={() => setTypeColor("rgb")}>Create RGB Color</button>
        <button onClick={typeColor === "hex" ? handleGenerateHexColor : handleGenerateRgbColor}>Generate Random Color</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          color: "white",
          fontSize: "4rem",
          marginTop: "3rem",
        }}
      >
        <h3>{typeColor === "hex" ? "HEX Color" : "RGB Color"} Color</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
