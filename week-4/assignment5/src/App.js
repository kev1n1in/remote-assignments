import "./App.css";
import { useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0);

  const AllAddOne = () => {
    setCount(count + 1);
  };
  const incresement = () => {};

  return (
    <div>
      <h1>Counters</h1>
      <MyButton count={count} onClick={AllAddOne} />
      <MyButton></MyButton>
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <>
      <button onClick={onClick}>+1</button>
      {count}
    </>
  );
}
