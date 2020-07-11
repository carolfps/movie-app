import React from 'react';
import MovieCard from './MovieCard';

const MovieGrid = (props) => {
    return (
        <ul>
            {props.movieList.map( movie => <MovieCard key={movie.id} movie={movie} />)}            
        </ul>
    );
}

export default MovieGrid;