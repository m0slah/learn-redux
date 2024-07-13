import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { decrement, increment } from "./actions";
import { useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="App">counter is: {counter}</div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default App;
