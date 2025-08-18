import { useState, useEffect } from "react";
import { llamadaApi } from "../helpers/funciones";
import Pelicula from "./Pelicula";
import FiltroEstrellas from "./FiltroEstrellas";
import { Rating } from "react-simple-star-rating";

export default function () {
  const [peliculas, setPeliculas] = useState([]);
  const [filtradas, setFiltradas] = useState([]);
  const [filtro, setFiltro] = useState(0);
  //Esta funcion llama a la api y guarda del resultado en peliculas
  useEffect(() => {
    llamadaApi()
      .then((resultado) => setPeliculas(resultado))
      .catch((err) => console.error(err));
  }, []);
  //con esta funcion interpretamos el rate y lo transformamos en el filtro que necesitamos
  const calcularRating = (rate) => {
    switch (rate) {
      case 1:
        setFiltro(0);
        break;
      case 2:
        setFiltro(2);
        break;
      case 3:
        setFiltro(4);
        break;
      case 4:
        setFiltro(6);
        break;
      default:
        setFiltro(8);
        break;
    }
  };
  const filtrar = (rate) => {
    calcularRating(rate);
    console.log(filtro);
  };
  return (
    <div className="container text-center">
      <Rating onClick={filtrar}></Rating>
      <div className="row">
        {peliculas.map((peli) => (
          <Pelicula
            key={peli.id}
            img={peli.poster_path}
            titulo={peli.title}
          ></Pelicula>
        ))}
      </div>
    </div>
  );
}
