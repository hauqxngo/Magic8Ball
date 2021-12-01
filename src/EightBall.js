import React, { useState } from "react";
import "./EightBall.css";

const choice = (arr) => {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
};

const EightBall = ({ answers }) => {
  const [answer, setAnswer] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  const handleClick = () => {
    const { msg, color } = choice(answers);
    setAnswer(msg);
    setColor(color);
  };

  const reset = () => {
    setAnswer("Think of a Question");
    setColor("black");
  };

  return (
    <div className="EightBall">
      <h1 className="EightBall-title">Magic 8 Ball</h1>
      <button
        className="EightBall-button"
        onClick={handleClick}
        style={{ backgroundColor: color }}
      >
        <p>{answer}</p>
      </button>

      <button className="EightBall-button-reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default EightBall;
