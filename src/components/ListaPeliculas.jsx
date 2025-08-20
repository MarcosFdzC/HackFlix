import { useState, useEffect } from "react";
import { llamadaApi } from "../helpers/funciones";
import Pelicula from "./Pelicula";
/*import FiltroEstrellas from "./FiltroEstrellas";
import { Rating } from "react-simple-star-rating";*/
import InfiniteScroll from "react-infinite-scroll-component";

export default function ListaPeliculas() {
  const [peliculas, setPeliculas] = useState([]);
  /*const [filtro, setFiltro] = useState(0);*/
  const [pagina, setPagina] = useState(1);
  const [masPaginas, setMasPaginas] = useState(true);
  //Esta funcion llama a la api y guarda del resultado en peliculas

  useEffect(() => {
    llamadaApi(1)
      .then((resultado) => setPeliculas(resultado))
      .catch((err) => console.error(err));
  }, []);
  //con esta funcion interpretamos el rate y lo transformamos en el filtro que necesitamos
  /*const filtrar = (rate) => {
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
  };*/

  const cargarMasPeliculas = () => {
    const paginaSiguiente = pagina + 1;

    llamadaApi(paginaSiguiente)
      .then((peliculasNuevas) => {
        setPeliculas((peliculasActuales) => [
          ...peliculasActuales,
          ...peliculasNuevas,
        ]);

        if (peliculasNuevas.length === 0 || peliculasNuevas.length < 20) {
          setMasPaginas(false);
        }
      })

      .catch((err) => console.error(err));

    setPagina(paginaSiguiente);
  };

  /*console.log(peliculas);*/
  return (
    <div className="container text-center">
      <InfiniteScroll
        dataLength={peliculas.length}
        next={cargarMasPeliculas}
        hasMore={masPaginas}
        loader={<h4 style={{ marginTop: "20px" }}>Cargando...</h4>}
        endMessage={
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            <b>No hay más películas para mostrar</b>
          </p>
        }
      >
        {/*<Rating onClick={filtrar}></Rating>*/}

        <div className="row">
          {peliculas.map((peli) => (
            <Pelicula
              key={`${peli.id}-${Math.random()}`}
              img={peli.poster_path}
              titulo={peli.title}
              fecha={peli.release_date}
              rating={peli.vote_average}
              informacion={peli.overview}
            ></Pelicula>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
