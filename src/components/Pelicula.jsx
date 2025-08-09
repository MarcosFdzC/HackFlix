//Imports
import movies from "../../movies.json";

export default function (img, titulo) {
  // logica
  //console.log(titulo);
  return (
    <>
      <div className="card" style={{ width: "15rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <a href="#" className="btn btn-warning">
            Ver trailer
          </a>
        </div>
      </div>
    </>
  );
}
