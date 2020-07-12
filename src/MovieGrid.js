import React from 'react';
import MovieCard from './MovieCard';
import './MovieGrid.css'

const MovieGrid = (props) => {
    return (
        <div className="grid">
            {props.movieList.map( movie => <MovieCard key={movie.id} movie={movie} />)}            
        </div>
    );
}

export default MovieGrid;