import { useState } from "react";
import "./search.css";
const Search = (props) => {
  let [term, setTerm] = useState("");
  const upDateTerm = (e) => {
    const item = e.target.value.toLowerCase();
    setTerm(item);
    props.upDateTermHandler(item);
  };
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Kinolarni qidirishi"
      onChange={upDateTerm}
      value={term}
    />
  );
};

export default Search;
