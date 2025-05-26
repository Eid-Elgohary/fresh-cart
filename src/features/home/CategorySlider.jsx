import { useEffect, useState } from "react";
import Slider from "react-slick";
import { styled } from "styled-components";

function CategorySlider({ header, list }) {
  const [slidesToShow, setSlidesToShow] = useState(3);

  function updateSlidesToShow() {
    const width = window.innerWidth;
    if (width >= 1200) {
      setSlidesToShow(6);
    } else if (width >= 768) {
      setSlidesToShow(4);
    } else {
      setSlidesToShow(3);
    }
  }

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    // autoplay: true,
    speed: 1500,
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
                <p style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
                  {item.title.split(" ").slice(0, 3).join(" ")}
                </p>
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
  border-radius: 4px;
  padding: 8px;
  min-height: 160px;
  font-size: 10px;

  @media (min-width: 576px) {
    min-height: 180px;
    font-size: 12px;
  }
  @media (min-width: 768px) {
    min-height: 200px;
  }
  @media (min-width: 992px) {
    min-height: 240px;
    font-size: 14px;
  }
  @media (min-width: 1200px) {
    min-height: 320px;
  }
`;
