import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { posterUrl } from "../helpers/funciones.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { llamadaFiltroId } from "../helpers/funciones";

function BasicExample() {
  const [peliculas, setPeliculas] = useState([]);
  const params = useParams();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWVhNDMyOTA4Y2I3NjFmM2VlNGM3ZDJkMTRjMGQ2OSIsIm5iZiI6MTc1NDk1NTUxMC4zMDMsInN1YiI6IjY4OWE3ZWY2YTEwMGZmZmYyMDVkMTdkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zvXAn13F1mvO1FG01juhFeI1qwBZ4Lgdxj3B-vlALkE",
      },
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setPeliculas(data);
      })
      .catch(function (error) {
        alert(error);
      });
  }, []);

  const src = posterUrl(peliculas.poster_path, "w342");
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title>{peliculas.title}</Card.Title>
          <Card.Text>{peliculas.overview}</Card.Text>
          <Button variant="primary">VER PELICULA!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default BasicExample;
