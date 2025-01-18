import React from "react";
import { useEffect, useState } from "react";
const Misc = () => {
  useEffect(() => {}, []);
  const [count, setCount] = useState(1);
  const [inc, setInc] = useState(0);
  const [dec, setDec] = useState(0);
  const [mul3, setMul3] = useState(0);
  const [mul5, setMul5] = useState(0);
  const [div3, setDiv3] = useState(0);
  const [div5, setDiv5] = useState(0);
  const [color, setColor] = useState("#000000");
  const [text, setText] = useState("");
  const incrementer = () => {
    setCount(count + 1);
    setInc(inc + 1);
  };
  const decrementer = () => {
    setCount(count - 1);
    setDec(dec + 1);
  };
  const multi3 = () => {
    setCount(count * 3);
    setMul3(mul3 + 1);
  };
  const multi5 = () => {
    setCount(count * 5);
    setMul5(mul5 + 1);
  };

  const divi3 = () => {
    setCount(count / 3);
    setDiv3(div3 + 1);
  };
  const divi5 = () => {
    setCount(count / 5);
    setDiv5(div5 + 1);
  };
  return (
    <div>
      <>
        <h1>{text.length > 0 ? text : "Welcome User"}</h1>
        <h1>Count = {count}</h1>

        <input
          type="color"
          name="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <div className="buttons">
          <button style={{ backgroundColor: color }} onClick={multi3}>
            Multiply by 3
          </button>
          <button style={{ backgroundColor: color }} onClick={multi5}>
            Multiply by 5
          </button>
          <button style={{ backgroundColor: color }} onClick={divi3}>
            Divide by 3
          </button>
          <button style={{ backgroundColor: color }} onClick={divi5}>
            Divide by 5
          </button>
          <button style={{ backgroundColor: color }} onClick={incrementer}>
            Increment
          </button>
          <button style={{ backgroundColor: color }} onClick={decrementer}>
            Decrement
          </button>
          <p style={{ color: color }}>
            The count has been multipled by three {mul3} times
          </p>
          <p style={{ color: color }}>
            The count has been multipled by five {mul5} times
          </p>
          <p style={{ color: color }}>
            The count has been divided by three {div3} times
          </p>
          <p style={{ color: color }}>
            The count has been divided by five {div5} times
          </p>
          <p style={{ color: color }}>
            The count has been incremented by one {inc} times
          </p>
          <p style={{ color: color }}>
            The count has been decremented by one {dec} times
          </p>
        </div>
        <input
          type="text"
          name="input"
          id="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </>
    </div>
  );
};

export default Misc;
