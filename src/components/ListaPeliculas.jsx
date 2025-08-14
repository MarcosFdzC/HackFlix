import { useState, useEffect } from "react";
import { llamadaApi } from "../helpers/funciones";
import Pelicula from "./Pelicula";

export default function () {
  const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {
    llamadaApi()
      .then((resultado) => setPeliculas(resultado))
      .catch((err) => console.error(err));
  }, []);

  console.log(peliculas);
  return (
    <div className="container text-center">
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
