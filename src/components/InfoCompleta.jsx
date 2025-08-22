import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { posterUrl } from "../helpers/funciones.js";
function BasicExample({ titulo, informacion, img }) {
  const src = posterUrl(img, "w342");

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{informacion}</Card.Text>
          <Button variant="primary">VER PELICULA!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default BasicExample;
