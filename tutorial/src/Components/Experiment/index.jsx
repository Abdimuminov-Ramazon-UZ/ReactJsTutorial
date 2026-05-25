import { useRef, useState } from "react";
import "./index.scss";
// const ForExperiment = () => {
//   let [counter, setCounter] = useState(4);

//   const increment = () => {
//     setCounter((prevCont) => prevCont + 1);
//   };
//   const decrement = () => {
//     setCounter((prevCont) => prevCont - 1);
//   };
//   useEffect(() => {
//     console.log("max");
//   }, [counter]);
//   const searchCounter = useCallback(
//     () =>
//       new Array(counter).fill("").map((_, index) => `counters ${index + 1}`),
//     [counter],
//   );
//   let bigNumber = (n) => {
//     let i = 1;
//     while (i > 100000000) i++;
//     return n * 5;
//   };
//   const number = useMemo(() => bigNumber(counter), [counter]);
//   console.log(searchCounter());
//   return (
//     <div class="axe">
//       <h1>experiments {number}</h1>
//       <button onClick={increment}>Increment</button>
//       <p>{counter}</p>
//       <button onClick={decrement}>Decrement</button>
//       <Extra searchCounter={searchCounter} />
//     </div>
//   );
// };
const ForExperiment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvcNumber, setCvcNumber] = useState("");
  const cvcRef = useRef(null);
  const dataRef = useRef(null);
  const handleinput = (e) => {
    const val = e.target.value;
    setCardNumber(val);
    if (val.length === 16) {
      cvcRef.current.focus();
    }
  };
  const handleSecure = (e) => {
    const val = e.target.value;
    setCvcNumber(val);
    if (val.length === 3) {
      dataRef.current.focus();
    }
  };
  return (
    <div className="m-50 mx-auto mb-5">
      <div className="boredr p-3 mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Card Number"
          value={cardNumber}
          onChange={handleinput}
        />

        <input
          ref={cvcRef}
          type="text"
          className="form-control"
          placeholder="secure number"
          value={cvcNumber}
          onChange={handleSecure}
        />
        <input
          ref={dataRef}
          type="text"
          className="form-control"
          placeholder="year/month"
        />
      </div>
    </div>
  );
};
export default ForExperiment;
// 6 hour 5 minutes
