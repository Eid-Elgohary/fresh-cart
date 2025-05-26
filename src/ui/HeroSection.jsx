import Container from "./Container";

import { styled } from "styled-components";

import bg1 from "../../public/bg-1.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlide from "./HeroSlide";

function HeroSection() {
  return (
    <Div>
      <HeroSlide />
    </Div>
  );
}

export default HeroSection;

const Div = styled.div`
  position: relative;
  border-radius: 4px;
  background-image: url(${bg1});
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  @media (min: 992px) {
    background-position: center;
  }
`;