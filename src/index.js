import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "redux";

//STORE => GLOBAL STATE

//ACTION INCREMENT
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// REDUCER
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

// DISPATH
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
