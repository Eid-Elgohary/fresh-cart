import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

export function getStars(rating) {
  let fullStar = '<FaStar color="#FFC107" />';

  let halfStar = '<FaStarHalf color="#FFC107" />';
  let emptyStar = '<FaRegStar color="#FFC107" />;';
  let stars = "";

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += fullStar + "+";
    } else if (i - 0.5 <= rating) {
      stars += halfStar + "+"; // نصف نجمة
    } else {
      stars += emptyStar + "+"; // نجمة فارغة
    }
  }
  return stars;
}
