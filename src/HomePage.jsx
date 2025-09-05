import { useState } from "react";
import "./App.css";
import ListaPeliculas from "./components/ListaPeliculas.jsx";
import Header from "./components/Header.jsx";
import Carousel from "./components/Carousel.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [idGenero, setIdGenero] = useState(null);

  return (
    <div className="app-container">
      <Header seleccionarGenero={setIdGenero} />

      <Carousel />
      <main className="movies-container">
        <ListaPeliculas generoSeleccionado={idGenero} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
