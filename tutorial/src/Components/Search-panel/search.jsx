import { Component } from "react";
import "./search.css";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  upDateTerm = (e) => {
    this.setState({ term: e.target.value.toLowerCase() });
    this.props.upDateTermHandler(e.target.value.toLowerCase());
  };
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Kinolarni qidirishi"
        onChange={this.upDateTerm}
        value={this.state.term}
      />
    );
  }
}

export default Search;
