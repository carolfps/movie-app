import React from 'react';
import './MovieCard.css'

const MovieCard = (props) => {
    return(
        <div className="card">
            <div className="card-title">{props.movie.title}</div>
            <p className="card-text"> <span className="card-label"> Descrição: </span> {props.movie.description}</p>
            <p className="card-text"> <span className="card-label"> Diretor: </span> {props.movie.director} </p>
            <div className="overlay-card">
                <div className="overlay-text">VER DETALHE</div>
            </div>
        </div>
    );
}

export default MovieCard;