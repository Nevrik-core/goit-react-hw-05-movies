import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const api_key = '2402629cc235e448b11efcecffc11c17';
const params = {
    trending: 'trending/all/week'
}

export const fetchTrending = async (page) => {
    const {trending } = params
    const response = await axios.get(`/${trending}?api_key=${api_key}&page=${page}`);
  return response.data;
  };

   
