import React from "react";
import MovieList from "./components/MovieList";
import { MovieProvider } from "./contexts/MovieContext";
import "./App.css";

function App() {
  return (
    <MovieProvider>
      <MovieList />
    </MovieProvider>
  );
}

export default App;
