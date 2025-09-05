import { useState, useEffect } from "react";
import "./Header.css";
import { Modal, Button, Form, Dropdown, Alert } from "react-bootstrap";
import { llamadaGenerosApi } from "../helpers/funciones";

export default function Header({ seleccionarGenero }) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => {
    setMostrarModal(false);
    setErrorFormulario("");
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  const [generos, setGeneros] = useState([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [tipoAlerta, setTipoAlerta] = useState("success");

  const [errorFormulario, setErrorFormulario] = useState("");

  const envioFormulario = (event) => {
    event.preventDefault();
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      setErrorFormulario("Por favor, completa todos los campos.");
      return;
    }

    setErrorFormulario("");

    /* Envio del formulario a Web3Forms */
    const datosFormulario = {
      access_key: "d30d150d-736d-4fac-9e4b-045f22590c21",
      nombre,
      email,
      mensaje,
    };

    const datosFormatoJson = JSON.stringify(datosFormulario);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: datosFormatoJson,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setTipoAlerta("success");
          setMensajeAlerta("¡Mensaje enviado con éxito!");
          setMostrarAlerta(true);
          cerrarModal();
        } else {
          setErrorFormulario("Hubo un error al enviar el mensaje.");
        }
      })
      .catch((error) => {
        setErrorFormulario("Hubo un error al enviar el mensaje.");
      });
  };

  /* llamada a la API de géneros */
  useEffect(() => {
    llamadaGenerosApi()
      .then((listaGeneros) => {
        setGeneros(listaGeneros);
      })
      .catch((error) => {
        console.error(err);
      });
  }, []);

  /* temporizador para ocultar alerta */

  useEffect(() => {
    if (mostrarAlerta) {
      const temporizador = setTimeout(() => {
        setMostrarAlerta(false);
      }, 3000);
      return () => clearTimeout(temporizador);
    }
  }, [mostrarAlerta]);

  return (
    <>
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
                <Dropdown.Item onClick={() => seleccionarGenero(null)}>
                  Todos los géneros
                </Dropdown.Item>
                {generos.map((genero) => (
                  <Dropdown.Item
                    key={genero.id}
                    onClick={() => seleccionarGenero(genero.id)}
                  >
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
            {errorFormulario && (
              <Alert variant="danger">{errorFormulario}</Alert>
            )}
            <Form onSubmit={envioFormulario} id="formulario-contacto">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Escribe tu mensaje aquí"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cerrarModal}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit" form="formulario-contacto">
              Enviar mensaje
            </Button>
          </Modal.Footer>
        </Modal>
      </header>
      {mostrarAlerta && (
        <Alert
          variant={tipoAlerta}
          onClose={() => setMostrarAlerta(false)}
          dismissible
          className="alerta-flotante"
        >
          {mensajeAlerta}
        </Alert>
      )}
    </>
  );
}
