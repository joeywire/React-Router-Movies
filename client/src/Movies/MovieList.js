
import {Link, useRouteMatch} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function MovieList(props) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data)
          console.log(response)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movieList.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({movie}) {
  const { title, director, metascore } = movie;
  
  return (
    <Link to={`/movies/${movie.id}`}>
        <div className="movie-card">
            <h2>{title}</h2>
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
        </div>
    </Link>
    
  );
}

export default MovieList