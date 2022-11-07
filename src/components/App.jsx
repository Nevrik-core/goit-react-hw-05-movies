import { Route, Routes } from "react-router-dom";
// import { useState, useEffect } from "react";

import { Layout } from "./Layout/Layout";
import { TrendingMovies } from "pages/Home/Home";



export function App() {



  return (
    <div>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<Layout />}>
          
          <Route index element={<TrendingMovies/>} />
        </Route>
        <Route element={ <div>djbfksjd</div>} />
      </Routes>
    
    </div>
  );
};
