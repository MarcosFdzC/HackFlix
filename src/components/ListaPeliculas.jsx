import movies from "../../movies.json";
import Pelicula from "./Pelicula";

export default function () {
  // logica
  return (
    <div className="container text-center">
      <div className="row">
        {movies.map((peli) => (
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
