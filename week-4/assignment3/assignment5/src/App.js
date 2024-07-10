import "./App.css";
import { useState } from "react";

function App() {
  const [counters, setCounters] = useState([0, 0, 0]);
  const [incrementAll, setIncrementAll] = useState([0, 0, 0]);

  const addCounter = () => {
    setCounters([...counters, 0]);
    setIncrementAll([...incrementAll, 0]);
  };
  const incrementAllOne = () => {
    const newIncrementAll = incrementAll.map((count) => count + 1);
    setIncrementAll(newIncrementAll);
  };
  return (
    <div id="app">
      <div className="left">
        <button className="counters" onClick={incrementAllOne}>
          All+1
        </button>
        {counters.map((_, index) => (
          <Counter key={index} incrementAll={incrementAll} id={index} />
        ))}
      </div>
      <button className="counters addCounter" onClick={addCounter}>
        Add a Counter
      </button>
    </div>
  );
}

function Counter({ incrementAll, id }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button className="counters counter" onClick={() => setCount(count + 1)}>
        +1
      </button>
      <span>{count + incrementAll[id]}</span>
    </div>
  );
}

export default App;
