import './App.css';
import {getMovieList,searchMovie} from "./api"
import { useEffect, useState } from 'react';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([])
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  },[])

  const PopularMovieList = () => {
    return popularMovies.map((movie,i) => {
      return (
      <div className='movie-wrapper' key={i}>
        <div className='movie-title'>{movie.title}</div>
        <img className='movie-img' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
        <div className='movie-date'>Release Date: {movie.release_date}</div>
        <div className='movie-rating'>{movie.vote_average}</div>
      </div>
      )
    })
  }

  
  const search = async (q) => {
    if(q.length > 3){
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className='website-title'>LAYARKACUNG21</h1>
        <input placeholder='Search your film here' className='search-bar' 
          onChange={({target}) => search (target.value)}
        />
        <div className='movie-container'>
          <PopularMovieList/>
        </div>
      </header>
    </div>
  );
}

export default App;
