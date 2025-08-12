import movies from "../movies.json";
import { useState } from "react";
import "./App.css";
import ListaPeliculas from "./components/ListaPeliculas.jsx";
import Header from "./components/Header.jsx";
import { Carousel } from "bootstrap";

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
