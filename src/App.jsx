import movies from "../movies.json";
import { useState } from "react";
import "./App.css";
import ListaPeliculas from "./components/ListaPeliculas.jsx";

function App() {
  return (
    <>
      <ListaPeliculas></ListaPeliculas>
    </>
  );
}

export default App;
