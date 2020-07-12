import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import MovieGrid from './MovieGrid';

const App = () => {

  const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        async function fetchApi(){
            const response = await axios('https://ghibliapi.herokuapp.com/films');
            setMovieList(response.data);
        };
        fetchApi();
    }, []);

  return (
    <>
        <h1>Filmes Studio Ghibli</h1>
        {movieList.length > 0 && <MovieGrid movieList={movieList} />}
    </>
  );
}

export default App;
