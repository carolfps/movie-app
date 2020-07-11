import React from 'react';

const MovieCard = (props) => {
    return(
        <li>{props.movie.title}</li>
    );
}

export default MovieCard;