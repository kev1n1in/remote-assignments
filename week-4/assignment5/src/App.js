import "./App.css";
import { useState } from "react";

function App() {
  // 三個counter的初始值用array表示 ,後面的count代表全加1 跟個別加1
  const [state, setState] = useState({ counters: [0, 0, 0], count: 0 });

  // 解構counter 複製一個出來 初始值0
  // 使用展開運算符來複製當前counters 當run addCounter時 在counters後面增加一個初始值為0的counter
  const addCounter = () => {
    setState((prevState) => ({
      ...prevState,
      counters: [...prevState.counters, 0],
    }));
  };
  // 全加1的公式
  // 這邊用了map去跑整個counter的array並把全部count都+1
  const allIncrementOne = () => {
    setState((prevState) => ({
      ...prevState,
      counters: prevState.counters.map((count) => count + 1),
    }));
  };
// 加1的公式
// 這邊雖然也是用map去跑 但不同的是 當只有idx等於傳入的index時 才會+1 其他則保持不變
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
      <div className="counters--left">
        {/* 全加1按鈕 */}
        <button className="counters" onClick={allIncrementOne}>
          All+1
        </button>
        {/* 自動插入新的counters */}
        {/* 因為要搭配addCounter會自動創建新的計數器 所以必須要用map去生成一組新的、有key的div*/}
        {state.counters.map((_,index) => (
          <div key={index}>
            <button
              className="counters counter__button"
              onClick={() => increment(index)}
            >
              +1
            </button>
            <span>{state.counters[index]}</span>
          </div>
        ))}
      </div>
      <button className="counters addCounter__button" onClick={addCounter}>
        Add a Counter
      </button>
    </div>
  );
}

export default App;
