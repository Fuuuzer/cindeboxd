import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
});


 const fetchPopularMovies = async (apiKey) => {
  try {
    const res = await api.get(`popular?api_key=${apiKey}&language=pt-BR&page=1`);
    const allPopularMovies = res.data.results;
    return allPopularMovies.slice(0, 5); //limita para apenas 5 filmes
  } catch (error) {
    console.log(error)
  }
}

export default fetchPopularMovies;