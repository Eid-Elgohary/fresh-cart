import Slider from "react-slick";
import { styled } from "styled-components";

function CategorySlider({ header, list }) {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    // autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
  };
  return (
    <Div>
      <H2>{header}</H2>
      <div className="slider-container">
        <Slider {...settings}>
          {list.map((item) => (
            <SlideDiv key={item.id}>
              <InnerDiv>
                <Img src={item.imageCover} alt={item.title} />
                <p>{item.title.split(" ").slice(0, 3).join(" ")}</p>
              </InnerDiv>
            </SlideDiv>
          ))}
        </Slider>
      </div>
    </Div>
  );
}

export default CategorySlider;

const H2 = styled.h2`
  margin: 16px 0 24px;
`;
const Div = styled.div`
  margin: 16px 0;
`;
const SlideDiv = styled.div`
  border-radius: 4px;
  padding: 8px 4px;
`;

const Img = styled.img`
  width: 100%;
  margin-bottom: 12px;
`;
const InnerDiv = styled.div`
  text-align: center;
  border: 1px solid var(--border);
  padding: 8px;
  min-height: 14px;
  font-size: 11px;

  @media (min-width: 576px) {
    min-height: 160px;
    font-size: 12px;
  }
  @media (min-width: 768px) {
    min-height: 190px;
  }
  @media (min-width: 992px) {
    min-height: 230px;
    font-size: 14px;
  }
  @media (min-width: 1200px) {
    min-height: 320px;
  }
`;
