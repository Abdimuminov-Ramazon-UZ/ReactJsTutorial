import { useCallback, useEffect, useState, useMemo } from "react";
import "./index.scss";
import Extra from "./extra.jsx";
const ForExperiment = () => {
  let [counter, setCounter] = useState(4);

  const increment = () => {
    setCounter((prevCont) => prevCont + 1);
  };
  const decrement = () => {
    setCounter((prevCont) => prevCont - 1);
  };
  useEffect(() => {
    console.log("max");
  }, [counter]);
  const searchCounter = useCallback(
    () =>
      new Array(counter).fill("").map((_, index) => `counters ${index + 1}`),
    [counter],
  );
  let bigNumber = (n) => {
    let i = 1;
    while (i > 100000000) i++;
    return n * 5;
  };
  const number = useMemo(() => bigNumber(counter), [counter]);
  console.log(searchCounter());
  return (
    <div class="axe">
      <h1>experiments {number}</h1>
      <button onClick={increment}>Increment</button>
      <p>{counter}</p>
      <button onClick={decrement}>Decrement</button>
      <Extra searchCounter={searchCounter} />
    </div>
  );
};
export default ForExperiment;
