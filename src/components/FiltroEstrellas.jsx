import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function () {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <>
      <Rating
        onClick={setRating}
        size={40}
        transition
        fillColor="#ffd700"
        emptyColor="gray"
      ></Rating>
    </>
  );
}
