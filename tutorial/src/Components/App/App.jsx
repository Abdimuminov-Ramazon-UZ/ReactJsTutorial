import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Appfilter from "../app-filter";
import AppInfo from "../app-info/app-info";
import Movies from "../movie-list/movie-list";
import MovieForm from "../movies-add-form";
import Search from "../Search-panel/search";
import "./App.css";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ],
      term: "",
      filter: "all",
    };
  }
  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };
  addForm = (e, item) => {
    e.preventDefault();

    this.setState(({ data }) => ({
      data: [...data, { ...item, id: uuidv4() }],
    }));
  };

  onToggleProp = (id, prop) => {
    console.log(id);
    this.setState(({ data }) => {
      let res = data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
      return { data: res };
    });
  };
  // onToggleLike = (id) => {
  //   console.log(id);
  //   this.setState(({ data }) => {
  //     let res = data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, like: !item.like };
  //       }
  //       return item;
  //     });
  //     return { data: res };
  //   });
  // };
  searchHandler = (arr, term) => {
    if (term == "") {
      return arr;
    }
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };
  upDateTermHandler = (term) => this.setState({ term });
  filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((c) => c.like);
      case "mostView":
        return arr.filter((c) => c.view > 800);
      default:
        return arr;
    }
  };
  updateFilterhandler = (filter) => this.setState({ filter });

  render() {
    let { data, filter, term } = this.state;
    let allFilm = data.length;
    let favouriteFilms = data.filter((c) => c.favourite == true).length;
    const visibleData = this.filterHandler(
      this.searchHandler(data, term),
      filter,
    );

    return (
      <div className="app font-monospace">
        <div className="content">
          {/* <App2></App2> */}
          <AppInfo allFilm={allFilm} favouriteFilms={favouriteFilms} />
          <Search term={this.term} upDateTermHandler={this.upDateTermHandler} />
          <Appfilter
            filter={filter}
            updateFilterhandler={this.updateFilterhandler}
          />
          <Movies
            onToggleProp={this.onToggleProp}
            data={visibleData}
            onDelete={this.onDelete}
          />
          <MovieForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}
// export default App
//3 hour 50 minutes
