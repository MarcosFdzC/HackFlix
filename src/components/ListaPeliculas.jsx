import { useState, useEffect } from "react";
import { llamadaApi } from "../helpers/funciones";
import Pelicula from "./Pelicula";
import { Rating } from "react-simple-star-rating";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ListaPeliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const [filtro, setFiltro] = useState(0);
  const [pagina, setPagina] = useState(1);
  const [masPaginas, setMasPaginas] = useState(true);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);
    setPagina(1);
    setMasPaginas(true);
    llamadaApi(1, filtro)
      .then((resultado) => {
        setPeliculas(resultado);
        setCargando(false);
      })
      .catch((err) => {
        console.error(err);
        setCargando(false);
      });
  }, [filtro]);

  const cargarMasPeliculas = () => {
    const paginaSiguiente = pagina + 1;
    llamadaApi(paginaSiguiente, filtro)
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

  const renderizarContenido = () => {
    if (cargando && peliculas.length === 0)
      return <h4 style={{ marginTop: "20px" }}>Cargando...</h4>;
    if (!cargando && peliculas.length === 0)
      return (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          <b>
            Lo sentimos, no se encontraron películas con el rating solicitado.
          </b>
        </p>
      );
    return (
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
        <div className="row">
          {peliculas.map((peli) => (
            <Pelicula
              key={`${peli.id}-${Math.random()}`}
              img={peli.poster_path}
              titulo={peli.title}
              fecha={peli.release_date}
              rating={peli.vote_average}
              informacion={peli.overview}
            />
          ))}
        </div>
      </InfiniteScroll>
    );
  };

  return (
    <div className="container text-center">
      <Rating
        onClick={filtrar}
        initialValue={0}
        size={40}
        transition
        fillColor="#ffd700"
        emptyColor="gray"
      />
      {renderizarContenido()}
    </div>
  );
}
