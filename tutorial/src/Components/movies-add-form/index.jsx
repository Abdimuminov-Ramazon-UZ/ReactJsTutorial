import { Component } from "react";
import "./index.css";
class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "+99890-",
      view: "12",
    };
  }
  changehandlerInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, view } = this.state;
    let { addForm } = this.props;
    return (
      <div>
        <h3>Add new movies</h3>
        <form
          className="add-form d-flex"
          onSubmit={(e) => addForm(e, { name, view })}
        >
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="How movie ?"
            onChange={this.changehandlerInput}
            value={name}
            name="name"
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="how time is showed?"
            onChange={this.changehandlerInput}
            value={view}
            name="views"
          />
          <button className="btn btn-outline-dark" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default MovieForm;
