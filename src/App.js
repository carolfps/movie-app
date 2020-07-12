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
            let responseData = response.data;

            for( let film of responseData){
              if(film.people.length > 0){
                const tokens = film.people[0].split("/");
                if(tokens[tokens.length - 1] === ""){
                  film.people = [];
                } else{
                  for(let index in film.people){                    
                    const responsePerson = await axios(film.people[index]);
                    film.people[index] = responsePerson.data;
                  }
                }
              }
            }
            setMovieList(responseData);
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
