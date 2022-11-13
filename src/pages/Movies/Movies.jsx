import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { MoviesList } from "components/MoviesList/MoviesList";
import { fetchMoviesByQuery } from "services/fetch";
import { SearchBox } from "../../components/Searchbox/Searchbox";

export const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [moviesList, setMoviesList] = useState([]);
   const page = Number(searchParams.get('page') ?? 1);

    const formSubmitHandler = e => {
    e.preventDefault();
    const searchForm = e.currentTarget.elements.query.value;
    if (searchForm === '') {
      console.log('Please, enter your request');
    }
      
    setSearchParams(searchForm !== '' ? { query: searchForm} : '');
    setMoviesList([]);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    // setMoviesList([]);

    async function addMoviesListByQuery() {
      try {
        const data = await fetchMoviesByQuery(query, page);
        if (page > 1) {
          setMoviesList(prevMoviesList => [...prevMoviesList, ...data.results]);
        }
        setMoviesList([...data.results]);
        // setTotal(Math.round(data.total_results / 20));
        setSearchParams({ query: query, page: page });

        // if (data.results.length === 0) {
        //   setError(true);
        // }
      } catch (error) {
        console.log(error.message);
      }
    }
    addMoviesListByQuery();
  }, [query, page, setSearchParams]);

  return (
    
    <main>
      <SearchBox value={query} onSubmit={formSubmitHandler} />
      {moviesList && <MoviesList movies={moviesList} />}
    </main>
  );
};