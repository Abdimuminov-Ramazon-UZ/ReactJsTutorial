import { useEffect, useState } from "react";
const Extra = ({ searchCounter }) => {
  let [searcher, setSearch] = useState([]);

  useEffect(() => {
    const newItem = searchCounter();
    setSearch(newItem);
  }, [searchCounter]);
  return (
    <ul>
      {searcher.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default Extra;
