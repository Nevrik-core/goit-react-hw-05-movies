import { useState, useEffect } from "react";

import { fetchTrending } from 'services/fetch';
import { MoviesList } from "../../components/MoviesList/MoviesList";



export function TrendingMovies() {

    const [movies, setMovies] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        (async function addMovies() {
      try {
          const fetchedTrends = await fetchTrending(1);
          console.log(fetchedTrends);
          setMovies([...fetchedTrends.results]);
      } catch (error) {
        console.log(error)
      }
    })();
    }, [])

    return (
        <>
             <MoviesList movies={movies} />
        </>
       
    )
}