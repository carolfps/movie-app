import React from 'react';
import MovieCard from './MovieCard';
import './MovieGrid.css'

const MovieGrid = (props) => {
    return (
        <div className="grid">
            {props.movieList.map( (movie, index) => {
                    return(
                        <a key={movie.id} href={`/${movie.title.split(" ").join("-").toLowerCase()}`} className="link-card">
                            <MovieCard movie={movie} />
                        </a>
                    )})}
        </div>
    );
}

export default MovieGrid;