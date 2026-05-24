import "./app-info.css";
const AppInfo = (props) => {
  let allFilm = props.allFilm;
  let favouriteFilms = props.favouriteFilms;
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">Barcha kinolar soni:{allFilm}</p>
      <p className="fs-4 text-uppercase">
        Sevimli kinolar soni:{favouriteFilms}
      </p>
    </div>
  );
};

export default AppInfo;
