import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./card.css";
import { Link } from "react-router-dom";

const Cards = ({ movie }) => {
   return (
      <div className="movie-lists">
         <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
            <div className="cards">
               <img
                  className="cards__img"
                  src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`}
               />
            </div>
         </Link>
      </div>
   );
};

export default Cards;
