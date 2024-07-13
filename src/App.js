import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const [counter, setCounter] = useState(useSelector((state) => state.counter));

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div className="App">counter is: {counter}</div>
      <button onClick={increment}>increment</button>
    </>
  );
}

export default App;
