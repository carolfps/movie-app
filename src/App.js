import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import MovieGrid from './MovieGrid';
import MovieDetail from './MovieDetail';

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
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/">
          <h1>Filmes Studio Ghibli</h1>
          {movieList.length > 0 && <MovieGrid movieList={movieList} />}
        </Route>
        <Route exact path="/detalhe/:id" >
          {movieList.length > 0 && <MovieDetail movieList={movieList} />}
        </Route>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
