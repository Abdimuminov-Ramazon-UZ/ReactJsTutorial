import { Component } from "react";
import "./index.css";
class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false,
      like: false,
    };
  }
  onFavourite = () => {
    this.setState(({ favourite }) => ({ favourite: !favourite }));
  };
  onLike = () => {
    this.setState(({ like }) => ({ like: like }));
  };
  render() {
    const { name, view, onDelete, onToggleProp, favourite, like } = this.props;

    return (
      <li
        className={`list-group-item d-flex justify-content-between ${favourite && "favourite"}  ${like && "like"}`}
      >
        <span
          onClick={onToggleProp}
          className="list-group-item-label"
          data-toggle="like"
        >
          {name}
        </span>
        <input
          type="number"
          className="list-group-item-input"
          defaultValue={view}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={onToggleProp}
            className="btn-cookie btn-sm"
            data-toggle="favourite"
          >
            <i className="fas fa-cookie"></i>
          </button>
          <button onClick={onDelete} className="btn-trash btn-sm">
            <i className="fas fa-trash"></i>
          </button>

          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default Items;
