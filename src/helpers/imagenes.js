export function posterUrl(path, size) {
  if (!path) {
    return "https://blocks.astratic.com/img/general-img-landscape.png";
  } else {
    return `https://image.tmdb.org/t/p/${size}${path}`;
  }
}
