import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Appfilter from "../app-filter/index";
import AppInfo from "../app-info/app-info";
import Movies from "../movie-list/movie-list";
import MovieForm from "../movies-add-form/index";
import Search from "../Search-panel/search";
import "./App.css";
const arr = [
  {
    name: "Breaking Bad",
    view: 200,
    id: 1,
    favourite: true,
    like: true,
  },
  { name: "El Camino", view: 900, id: 11, favourite: true, like: false },
  {
    name: "Bettlejuce",
    view: 500,
    id: 12,
    favourite: false,
    like: false,
  },
  {
    name: "Uoll Street's wolf",
    view: 1200,
    id: 13,
    favourite: false,
    like: false,
  },
  {
    name: "Interstellar",
    view: 2200,
    id: 14,
    favourite: false,
    like: false,
  },
  {
    name: "Ace Ventura",
    view: 3200,
    id: 15,
    favourite: true,
    like: false,
  },
];
export const FunctionApp = () => {
  const [data, setData] = useState(arr);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const onDelete = (id) => {
    setData((prev) => ({ prev: prev.filter((item) => item.id == id) }));
  };
  const addForm = (e, item) => {
    e.preventDefault();
    setData((perv) => ({ perv: [...perv, { ...item, id: uuidv4() }] }));
  };
  const onToggleProp = (id, prop) => {
    setData((prev) => {
      let res = prev.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
      return { prev: res };
    });
  };
  const searchHandler = (arr, term) => {
    if (term == "") {
      return arr;
    }
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };
  const upDateTermHandler = (term) => setTerm({ term });
  const filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((c) => c.like);
      case "mostView":
        return arr.filter((c) => c.view > 800);
      default:
        return arr;
    }
  };
  const updateFilterhandler = (filter) => setFilter({ filter });
  let favoriteFilms = arr.filter((c) => c.favourite == true);

  return (
    <div className="app font-monospace">
      <div className="content">
        {/* <App2></App2> */}
        <AppInfo allFilm={data.length} favouriteFilms={favoriteFilms.length} />
        <Search term={term} upDateTermHandler={upDateTermHandler} />
        <Appfilter filter={filter} updateFilterhandler={updateFilterhandler} />
        <Movies
          onToggleProp={onToggleProp}
          data={filterHandler(searchHandler(data, term), filter)}
          onDelete={onDelete}
        />
        <MovieForm addForm={addForm} />
      </div>
    </div>
  );
};
//6 hour 40 minutes
