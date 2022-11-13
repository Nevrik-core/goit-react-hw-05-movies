import { Route, Routes, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
import { Container } from 'styled-bootstrap-grid';
import { lazy } from "react";
import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from "../pages/MovieDetails/MovieDetails";
import { TrendingMovies } from "pages/Home/Home";
import {NotFound} from './NotFound/NotFound'


import { Header, Link } from "./App.styled";

// const MovieDetails = lazy(()=> import('../pages/MovieDetails/MovieDetails'))



export function App() {

  
  



  return (
    <Container >
      <Header>
        <nav>
            <Link to="/goit-react-hw-05-movies/" end>Home</Link>
            <Link to="/goit-react-hw-05-movies/movies">Movies</Link>
        </nav>
      </Header>
      
      <Routes>
        <Route>
        
          
          
        </Route>
        <Route path="/goit-react-hw-05-movies/" index element={<TrendingMovies />} />
        <Route path="/goit-react-hw-05-movies/movies/" element={<Movies/>} />
        <Route path="/goit-react-hw-05-movies/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    
    </Container>
  );
};
