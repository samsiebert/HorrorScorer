import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";
const APIKey = "8e8d1fb7683b829d728e204db461103b";

const MovieList = () => {
   const [movieList, setMovieList] = useState([]);
   const { type } = useParams();

   useEffect(() => {
      getData();
   }, [type]);

   const getData = () => {
      fetch(
         "https://api.themoviedb.org/3/discover/movie?api_key=" +
            APIKey +
            "&language=en-US&sort_by=popularity.desc&with_genres=27"
      )
         .then((res) => res.json())
         .then((data) => setMovieList(data.results));
   };

   return (
      <div className="movie__list">
         <h2 className="list__title">{(type ? type : "Scary Movies").toUpperCase()}</h2>
         <div className="list__cards">
            {movieList.map((movie) => (
               <Cards movie={movie} />
            ))}
         </div>
      </div>
   );
};

export default MovieList;
