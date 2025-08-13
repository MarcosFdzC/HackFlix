export function posterUrl(path, size) {
  if (!path) {
    return "https://blocks.astratic.com/img/general-img-landscape.png";
  } else {
    return `https://image.tmdb.org/t/p/${size}${path}`;
  }
}
//Funcion fetch
export async function llamadaApi() {
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.asc&vote_average.gte=2&vote_count.gte=50";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer TU_TOKEN_AQUI",
    },
  };

  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("Error al intentar consumir la API");
  }
  const data = await res.json();
  return data.results;
}
