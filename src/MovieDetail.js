import React from 'react';
import { useParams } from "react-router";

const MovieDetail = (props) => {
    let {id} = useParams();
    return(
        <div className="detail-card">
            <div className="detail-card-title">{props.movieList[id-1].title}</div>
            <p className="detail-card-date">{props.movieList[id-1].release_date}</p>
            <p className="detail-card-text"> <span className="card-label"> Descrição: </span> {props.movieList[id-1].description}</p>
            <p className="detail-card-text"> <span className="card-label"> Personagens: </span> Personagens</p>
            <p className="detail-card-text"> <span className="card-label"> Diretor: </span> {props.movieList[id-1].director} </p>
            <p className="detail-card-text"> <span className="card-label"> Produtor: </span> {props.movieList[id-1].producer} </p>
            <p className="detail-card-text"> <span className="card-label"> Pontuação Rotten Tomatoes: </span> {props.movieList[id-1].rt_score}&#37; </p>
        </div>
    );
}

export default MovieDetail;