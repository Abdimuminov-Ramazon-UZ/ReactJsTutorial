import { useState } from "react";
import "./index.css";
const MovieForm = ({ addForm }) => {
  let [data, setData] = useState({ name: "", view: "" });
  const changehandlerInput = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const addFormHandler = (e) => {
    e.preventDefault();
    if (data.name === "" || data.view === "") return;
    const item = { name: data?.name, view: data?.view };
    addForm(item);
    setData({ name: "", view: "" });
  };

  return (
    <div>
      <h3>Add new movies</h3>
      <form className="add-form d-flex" onSubmit={addFormHandler}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="How movie ?"
          onChange={changehandlerInput}
          value={data.name}
          name="name"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="how time is showed?"
          onChange={changehandlerInput}
          value={data.view}
          name="view"
        />
        <button className="btn btn-outline-dark" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
