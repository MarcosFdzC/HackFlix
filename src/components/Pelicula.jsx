//función helper para interpretar el poster_path
import { posterUrl } from "../helpers/imagenes.js";

export default function ({ img, titulo }) {
  // logica
  const src = posterUrl(img, "w342");
  return (
    <div className="col">
      <div className="card" style={{ width: "15rem" }}>
        <img src={src} className="card-img-top" alt={titulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <a href="#" className="btn btn-warning">
            Ver trailer
          </a>
        </div>
      </div>
    </div>
  );
}
