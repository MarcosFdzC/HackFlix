import { useState, useEffect } from "react";
import "./App.css";
import ListaPeliculas from "./components/ListaPeliculas.jsx";
import Header from "./components/Header.jsx";
import Carousel from "./components/Carousel.jsx";
import FiltroEstrellas from "./components/FiltroEstrellas.jsx";

function App() {
  return (
    <div className="app-container">
      <Header />

      <Carousel></Carousel>
      <main className="movies-container">
        <ListaPeliculas />
      </main>
    </div>
  );
}

export default App;
