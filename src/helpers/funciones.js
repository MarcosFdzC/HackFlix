export function posterUrl(path, size) {
  if (!path) {
    return "https://blocks.astratic.com/img/general-img-landscape.png";
  } else {
    return `https://image.tmdb.org/t/p/${size}${path}`;
  }
}

export async function llamadaApi(pagina) {
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pagina}&sort_by=popularity.desc`;

  //Funcion fetch
  /*export async function llamadaApi(filtro) {
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.asc&vote_average.gte=${filtro}&vote_count.gte=50`;*/

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWVhNDMyOTA4Y2I3NjFmM2VlNGM3ZDJkMTRjMGQ2OSIsIm5iZiI6MTc1NDk1NTUxMC4zMDMsInN1YiI6IjY4OWE3ZWY2YTEwMGZmZmYyMDVkMTdkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zvXAn13F1mvO1FG01juhFeI1qwBZ4Lgdxj3B-vlALkE",
    },
  };

  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("Error al intentar consumir la API");
  }
  const data = await res.json();
  return data.results;
}
