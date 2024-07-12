import "./App.css";
import { useState } from "react";

function App() {
  // 三個counter的初始值
  const [state, setState] = useState({ counters: [0, 0, 0], count: 0 });

  // 解構counter 複製一個出來 初始值0
  const addCounter = () => {
    setState((prevState) => ({
      ...prevState,
      counters: [...prevState.counters, 0],
    }));
  };
  // 全加1的公式
  const allIncrementOne = () => {
    setState((prevState) => ({
      ...prevState,
      counters: prevState.counters.map((count) => count + 1),
    }));
  };

  const increment = (index) => {
    setState((prevState) => ({
      ...prevState,
      counters: prevState.counters.map((count, idx) =>
        idx === index ? count + 1 : count
      ),
    }));
  };
  // 渲染畫面
  return (
    <div id="app">
      <div className="left">
        {/* 全加1按鈕 */}
        <button className="counters" onClick={allIncrementOne}>
          All+1
        </button>
        {/*自動插入新的counters */}
        {state.counters.map((_, index) => (
          <div key={index}>
            <button
              className="counters counter"
              onClick={() => increment(index)}
            >
              +1
            </button>
            <span>{state.counters[index]}</span>
          </div>
        ))}
      </div>
      <button className="counters addCounter" onClick={addCounter}>
        Add a Counter
      </button>
    </div>
  );
}

export default App;
