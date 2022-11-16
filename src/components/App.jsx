import { Route, Routes } from "react-router-dom";
// import { useState, useEffect } from "react";
import { Container } from 'styled-bootstrap-grid';
import { lazy, Suspense } from "react";
import { Loading} from './Loading/Loading'
// import { Movies } from '../pages/Movies/Movies';
// import { MovieDetails } from "../pages/MovieDetails/MovieDetails";
// import { TrendingMovies } from "pages/Home/Home";
import {NotFound} from './NotFound/NotFound'


import { Header, Link } from "./App.styled";

const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const TrendingMovies = lazy(() => import('../pages/Home/Home'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Review = lazy(() => import('../components/Review/Review'));

export function App() {

  


  return (
    <Container >
      <Header>
        <nav>
            <Link to="/goit-react-hw-05-movies/" end>Home</Link>
            <Link to="/goit-react-hw-05-movies/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" index element={<TrendingMovies />} />
        <Route path="/goit-react-hw-05-movies/movies/" element={<Movies/>} />
          <Route path="/goit-react-hw-05-movies/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
            </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    </Container>
  );
};
