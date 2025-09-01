import { useState, useEffect } from "react";
import "./Header.css";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { llamadaGenerosApi } from "../helpers/funciones";

export default function Header() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    llamadaGenerosApi()
      .then((listaDeGeneros) => {
        setGeneros(listaDeGeneros);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const menuItems = [
    { name: "HOME", icon: "bi-house-door" },
    { name: "MOVIES", icon: "bi-film" },
  ];

  return (
    <header className="vintage-header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="vintage-logo">HackFlix</h1>
        </div>
        <nav className="nav-menu">
          <a href="/" className="nav-item vintage-btn">
            <i className="bi-house-door"></i>
            <span>HOME</span>
          </a>

          <a href="#seccion-peliculas" className="nav-item vintage-btn">
            <i className="bi-film"></i>
            <span>MOVIES</span>
          </a>

          <Dropdown>
            <Dropdown.Toggle
              className="nav-item vintage-btn"
              id="dropdown-basic"
            >
              <i className="bi-collection"></i>
              <span>GENRES</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {generos.map((genero) => (
                <Dropdown.Item key={genero.id} href="#">
                  {genero.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <button className="nav-item vintage-btn" onClick={abrirModal}>
            <i className="bi-telephone"></i>
            <span>CONTACT</span>
          </button>
        </nav>
      </div>
      <Modal show={mostrarModal} onHide={cerrarModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Escribe tu mensaje aquí"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={cerrarModal}>
            Enviar mensaje
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
}
