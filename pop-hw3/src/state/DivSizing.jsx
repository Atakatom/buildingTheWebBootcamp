import React, { useState } from "react";

function DivSizing() {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);

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
          border: "1px solid rgba(0, 0, 0, 1)",
          width: width,
          height: height,
        }}
      ></div>
    </>
  );
}

export default DivSizing;
