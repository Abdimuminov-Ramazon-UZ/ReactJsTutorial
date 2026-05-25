import "./app-filter.css";
const btnArr = [
  { name: "all", label: "Barcha kinolar" },
  {
    name: "popular",
    label: "mashhur kinolar",
  },
  {
    name: "mostView",
    label: "eng ko'p ko'rilgan kinolar",
  },
];
const Appfilter = ({ updateFilterhandler, filter }) => {
  return (
    <div className="btn-group">
      {btnArr.map((btn) => (
        <button
          onClick={() => updateFilterhandler(btn.name)}
          key={btn.name}
          className={`btn ${filter === btn.name ? "btn-dark" : "btn-outline-dark"}`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default Appfilter;
