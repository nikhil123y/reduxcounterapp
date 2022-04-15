import "./styles.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const addBy = () => {
    dispatch({ type: "ADD", payload: 10 });
  };
  return (
    <div className="App">
      <h1>counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>Add By 10</button>
    </div>
  );
}
