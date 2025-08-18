import "./App.css";
import ListaPeliculas from "./components/ListaPeliculas.jsx";
import Header from "./components/Header.jsx";
import Carousel from "./components/Carousel.jsx";
<<<<<<< Updated upstream
import Footer from "./components/Footer.jsx";
=======
import FiltroEstrellas from "./components/FiltroEstrellas.jsx";
import ReactStars from "react-rating-stars-component";

const ratingChanged = (newRating) => {
  console.log(newRating);
};
>>>>>>> Stashed changes

function App() {
  return (
    <div className="app-container">
      <Header />

      <Carousel />
      <main className="movies-container">
        <ListaPeliculas />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
