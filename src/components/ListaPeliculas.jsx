import { useState, useEffect } from "react";
import { llamadaApi } from "../helpers/funciones";
import Pelicula from "./Pelicula";
import FiltroEstrellas from "./FiltroEstrellas";
import { Rating } from "react-simple-star-rating";
import InfoCompleta from "./InfoCompleta";

export default function ListaPeliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const [filtro, setFiltro] = useState(0);
  //Esta funcion llama a la api y guarda del resultado en peliculas
  useEffect(() => {
    llamadaApi(filtro)
      .then((resultado) => setPeliculas(resultado))
      .catch((err) => console.error(err));
  }, [filtro]);
  //con esta funcion interpretamos el rate y lo transformamos en el filtro que necesitamos
  const filtrar = (rate) => {
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
  console.log(peliculas);
  return (
    <div className="container text-center">
      <Rating onClick={filtrar}></Rating>
      <div className="row">
        {peliculas.map((peli) => (
          <Pelicula
            key={peli.id}
            img={peli.poster_path}
            titulo={peli.title}
            fecha={peli.release_date}
            rating={peli.vote_average}
            informacion={peli.overview}
          ></Pelicula>
        ))}
      </div>
    </div>
  );
}
