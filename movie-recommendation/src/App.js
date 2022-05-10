import React, {useState} from "react";
import MovieDatabase from './Moviedatabase';

var movies = Object.keys(MovieDatabase);

export default function App(){
  const [userGenre, setgenre] = useState("Horror");

  function OnClickHandler(item) {
    setgenre(item);
  }

  return(
    <div className="App">
      <h2 className="head">
        <b>Olu's Movie Recommendations for you</b>
      </h2>
      <hr />
      <div className="bgm1">
        <h4 style={{ color: "white" }}>
          <b> Checkout my favorite movies.</b>
          <em>Select a genre to get started </em>
        </h4>
        <div>
          {movies.map((item) => (
            <button className="btn" onClick={() => OnClickHandler(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <hr />

      <div className="bgm">
        <div className="body">
          <ul style={{ paddingInlineStart: "0" }}>
            {MovieDatabase[userGenre].map((movie) => (
              <li className="li">
                <div className="div1" key={movie.name}>
                  <b> {movie.name}</b>
                </div>
                <div className="div2" key={movie.rating}>
                  <strong> Rating:{movie.rating} </strong>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

}