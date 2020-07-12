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
            async function getApiData() {
              const response = await axios('https://ghibliapi.herokuapp.com/films');
              let responseData = response.data;

              for (let film of responseData) {
                if (film.people.length > 0) {
                  const tokens = film.people[0].split("/");
                  
                  if (tokens[tokens.length - 1] === "") {
                    film.people = [];
                  } else {
                    for (let index in film.people) {
                      const responsePerson = await axios(film.people[index]);
                      film.people[index] = responsePerson.data;
                    }
                  }
                }
              }
              return responseData;
            }

            let previousValues = localStorage.getItem("@movie-app/movies");

            if (previousValues) {              
              setMovieList(JSON.parse(previousValues));

              let responseData = await getApiData();
              let responseDataStr = JSON.stringify(responseData);

              if (previousValues !== responseDataStr) {
                localStorage.setItem("@movie-app/movies", responseDataStr);
                setMovieList(responseData);
              }

            } else {
              let responseData = await getApiData();
              setMovieList(responseData);

              localStorage.setItem("@movie-app/movies", JSON.stringify(responseData));
            }
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
        <Route exact path="/:title" >
          {movieList.length > 0 && <MovieDetail movieList={movieList} />}
        </Route>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
