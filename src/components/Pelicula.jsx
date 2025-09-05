//función helper para interpretar el poster_path
import { posterUrl } from "../helpers/funciones.js";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Pelicula({
  img,
  titulo,
  informacion,
  rating,
  fecha,
  id,
}) {
  function ModalTarjetas(props) {
    const navigate = useNavigate();
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>{titulo}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={src} alt="" />
          <p>Fecha de publicacion: "{fecha}" </p>
          <p>Informacion: {informacion}</p>
          <p>Rating: {rating}</p>
          <Button
            onClick={() => navigate(`/Informacion-Pelicula-Completa/${id}`)}
          >
            Mas informacion
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

/* logica */

  const src = posterUrl(img, "w342");
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 d-flex justify-content-center">
      <div className="card" style={{ width: "15rem" }}>
        <img
          src={src}
          className="card-img-top"
          alt={titulo}
          onClick={() => setModalShow(true)}
        />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>

          <Link
            to={`/Informacion-Pelicula-Completa/${id}`}
            className="btn btn-warning"
          >
            Informacion Completa
          </Link>
        </div>
        <ModalTarjetas show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
}
