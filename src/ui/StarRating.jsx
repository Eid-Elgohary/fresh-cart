import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} color="#FFC107" />);
    } else if (i - 0.5 <= rating) {
      stars.push(<FaStarHalfAlt key={i} color="#FFC107" />);
    } else {
      stars.push(<FaRegStar key={i} color="#5c6c75bf" />);
    }
  }

  return <div style={{ display: "flex", gap: "5px" }}>{stars}</div>;
};

export default StarRating;
