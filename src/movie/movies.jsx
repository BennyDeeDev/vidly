import React, { Component } from "react";
import Movie from "./movie";
import { paginate } from "../utils/paginate";
import Genre from "../genre/genre";

const movies = props => {
  return (
    <React.Fragment>
      <p>
        Showing{" "}
        {props.genre.length === 0 ? props.movies.length : props.genre.length}{" "}
        movies in the Database.
      </p>
      <Genre
        genre={props.movies.map(obj => obj.genre.name)}
        onGenreChange={props.onGenreChange}
      />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
          </tr>
        </thead>
        <tbody>
          {paginate(
            props.genre.length === 0 ? props.movies : props.genre,
            props.currentPage,
            props.pageSize
          ).map(movie => (
            <Movie
              key={movie._id}
              _id={movie._id}
              title={movie.title}
              onDelete={props.onDelete}
              onLiked={props.onLiked}
              genre={movie.genre.name}
              numberInStock={movie.numberInStock}
              dailyRentalRate={movie.dailyRentalRate}
              favorite={movie.liked}
            />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default movies;
