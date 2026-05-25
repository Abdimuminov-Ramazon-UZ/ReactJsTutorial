import Items from "../movie-list-item";
import "./movie-list.css";
const Movies = ({ data, onDelete, onToggleProp }) => {
  console.log(data);
  return (
    <ul className="movie-list">
      {data.map((element) => {
        return (
          <Items
            key={element.id}
            name={element.name}
            view={element.view}
            favourite={element.favourite}
            like={element.like}
            onToggleProp={(e) =>
              onToggleProp(
                element.id,
                e.currentTarget.getAttribute("data-toggle"),
              )
            }
            onDelete={() => onDelete(element.id)}
          />
        );
      })}
    </ul>
  );
};

export default Movies;
