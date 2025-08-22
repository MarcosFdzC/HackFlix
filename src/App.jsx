import "./App.css";
import ListaPeliculas from "./components/ListaPeliculas.jsx";
import Header from "./components/Header.jsx";
import Carousel from "./components/Carousel.jsx";
import Footer from "./components/Footer.jsx";
import FiltroEstrellas from "./components/FiltroEstrellas.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import InfoCompleta from "./components/InfoCompleta.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Informacion-Pelicula-Completa",
    element: <InfoCompleta />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
