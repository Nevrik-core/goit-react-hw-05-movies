import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const api_key = '2402629cc235e448b11efcecffc11c17';
const params = {
    trending: 'trending/all/week',
    movieID: 'movie/',
    search: 'search/movie'
}

export async function fetchTrending(page) {
    const response = await axios.get(`/${params.trending}?api_key=${api_key}&page=${page}`);
  return response.data;
  };

  
   
export async function fetchMovieByID(id) {

  const response = await axios.get(
    `/movie/${id}?api_key=${api_key}&language=en-US`
  );
  return response.data;
}


export async function fetchMoviesByQuery(query, page) {
  const response = await axios.get(
    `/${params.search}?api_key=${api_key}&query=${query}&language=en-US&page=${page}&include_adult=false`
  );
  return response.data;
}