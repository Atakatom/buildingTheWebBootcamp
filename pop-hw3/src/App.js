import "./App.css";
import React, { useState } from "react";

function App() {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  function changeSize() {
    setWidth(Math.floor(width));
    setHeight(Math.floor(height));
  }

  return (
    <>
      <input
        type="text"
        placeholder="width"
        onChange={(e) => setWidth(e.target.value)}
      />
      <input
        type="text"
        placeholder="height"
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={changeSize}>Change Size</button>
      <div
        style={{
          border: "solid",
          width: width,
          height: height,
        }}
      ></div>
    </>
  );
}

export default App;
