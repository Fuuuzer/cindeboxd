import React from 'react';
import { fetchMovieById } from '../../services/api'
import { useParams } from 'react-router';
import './Movie.css'



const Movie = () => {
  const [movie, setMovie] = React.useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  const { id } = useParams();

  React.useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetchMovieById(apiKey, id);
      console.log(movieData)
      setMovie(movieData)
    }
    getMovies()
  }, [id])


  return (
    <div className='movie'>{movie.overview}
      <h1>teste</h1>
      <h1>teste</h1>
      <h1>teste</h1>
      <h1>teste</h1>
    </div>
  )
}

export default Movie