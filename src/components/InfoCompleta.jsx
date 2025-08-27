import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { posterUrl } from "../helpers/funciones.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { llamadaFiltroId } from "../helpers/funciones";

function BasicExample({ img }) {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    llamadaFiltroId(params.id)
      .then((resultado) => setPeliculas(resultado))
      .catch((err) => console.error(err));
  });

  console.log(peliculas);
  const params = useParams();
  const src = posterUrl(img, "w342");

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title>{params.id}</Card.Title>
          <Card.Text>{params.id}</Card.Text>
          <Button variant="primary">VER PELICULA!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default BasicExample;
