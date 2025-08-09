//Imports
import movies from "../../movies.json";

export default function () {
  // logica
  console.log(movies);
  return (
    <>
      <h1>{movies[0].title}</h1>
    </>
  );
}
