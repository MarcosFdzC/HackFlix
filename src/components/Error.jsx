import "./Error.css";
export default function () {
  return (
    <div className="contenedor">
      <div>
        <h1 className="errorH1">I cant't find it</h1>
        <div className="d-flex justify-content-center">
          <div>
            <h3 className="">That's what she said</h3>
            <p>Well no, not really, but maybe she would say it</p>
            <p>
              Sorry about the page being broken. You can{" "}
              <a
                className="errorAnchor"
                href="mailto: emaildecontacto@email.com?Subject=Error de la página"
              >
                contact me
              </a>
              to let me know what I broke
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
