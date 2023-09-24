import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MovieCard } from '../Components/MovieCard'
import { Link } from 'react-router-dom'

import './MovieGrid.css'

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;



const Search = () => {


  const [searchParams ]= useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q')


  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

      setMovies(data.results);

      
    
  }

  useEffect(() => {
    const searchedUrl = `${searchUrl}?${apiKey}&query=${query}`;

      getSearchedMovies(searchedUrl);

  }, [query])



  return (
    <div className='container'>
      <h2 className='title'>Resultados para: <span className='query-text'>{query}</span>:</h2>
      <div className='movies-container'>
        {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id}  movie={movie}/>)}
      </div>
      <div className='movie-fail'>
        <h1>{movies.length < 0} Desculpe, não achamos um resultado para sua busca!</h1>
        <a >Volte para pagina inicial </a>

        
      </div>
    </div>
  )
}

export default Search