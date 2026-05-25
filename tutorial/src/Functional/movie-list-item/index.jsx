import "./index.css";
const Items = ({ name, view, onDelete, onToggleProp, favourite, like }) => {
  // let [favouriteS, setFavourite] = useState(false);
  // let [likeS, setLike] = useState(false);
  // const onFavourite = () => {
  //   setFavourite((perv) => ({ perv: !perv }));
  // };
  // const onLike = () => {
  //   setLike((like) => ({ like: like }));
  // };
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
};

export default Items;
