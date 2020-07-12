import React from 'react';
import { useParams } from "react-router";
import './MovieDetail.css';

const MovieDetail = (props) => {
    let {id} = useParams();
    let movie = props.movieList[id-1];
    let names = movie.people.map((person)=> person.name);
    let nameStr = names.join(", ");
    return(
        <div className="detail-card">
            <div className="detail-card-title">{props.movieList[id-1].title}</div>
            <p className="detail-card-date">{props.movieList[id-1].release_date}</p>
            <p className="detail-card-text"> <span className="card-label"> Descrição: </span> {movie.description}</p>
            <p className="detail-card-text"> <span className="card-label"> Personagens: </span> {movie.people.length>0 ? nameStr : <span className="no-info"> Sem informação </span>}</p>
            <p className="detail-card-text"> <span className="card-label"> Diretor: </span> {movie.director} </p>
            <p className="detail-card-text"> <span className="card-label"> Produtor: </span> {movie.producer} </p>
            <p className="detail-card-text"> <span className="card-label"> Pontuação Rotten Tomatoes: </span> {movie.rt_score}&#37; </p>
        </div>
    );
}

export default MovieDetail;