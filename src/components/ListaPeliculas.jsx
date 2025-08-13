import { useState, useEffect } from "react";
import Pelicula from "./Pelicula";

export default function () {
  const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.asc&vote_average.gte=2&vote_count.gte=50";

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWVhNDMyOTA4Y2I3NjFmM2VlNGM3ZDJkMTRjMGQ2OSIsIm5iZiI6MTc1NDk1NTUxMC4zMDMsInN1YiI6IjY4OWE3ZWY2YTEwMGZmZmYyMDVkMTdkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zvXAn13F1mvO1FG01juhFeI1qwBZ4Lgdxj3B-vlALkE",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setPeliculas(data.results);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(peliculas);
  return (
    <div className="container text-center">
      <div className="row">
        {peliculas.map((peli) => (
          <Pelicula
            key={peli.id}
            img={peli.poster_path}
            titulo={peli.title}
          ></Pelicula>
        ))}
      </div>
    </div>
  );
}
