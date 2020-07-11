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
    <div>
        {movieList.length > 0 && <MovieGrid movieList={movieList} />}
    </div>
  );
}

export default App;
