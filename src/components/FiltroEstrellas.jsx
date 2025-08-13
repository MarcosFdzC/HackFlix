import ReactStars from "react-rating-stars-component";

export default function FiltroEstrellas({ onChange }) {
  const ratingChanged = (newRating) => {
    console.log(newRating); // aquí recibís el valor (1 a 5)
    if (onChange) {
      onChange(newRating);
    }
  };

  return (
    <>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={30}
        activeColor="#ffd700"
      />
    </>
  );
}
