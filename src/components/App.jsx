import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function onClick() {
    setHeadingText("Stop it");
  }

  function onMouseOver() {
    setMouseOver(true);
  }

  function onMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
