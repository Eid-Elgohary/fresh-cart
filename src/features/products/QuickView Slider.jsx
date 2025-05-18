import styled from "styled-components";
import { useState } from "react";

function QuickViewSlider({ images, title }) {
  const [currentImg, setCurrentImg] = useState(images[0]);
  return (
    <div>
      <Div>
        <MainImg
          as={"img"}
          width={"520px"}
          height={"400px"}
          src={currentImg}
          alt={title}
        />
      </Div>
      <Slides>
        {images.map((img, i) => (
          <Slide key={i}>
            <Img
              as={"img"}
              src={img}
              onClick={() => setCurrentImg(img)}
              alt={title}
            />
          </Slide>
        ))}
      </Slides>
    </div>
  );
}

export default QuickViewSlider;
const Div = styled.div`
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 1rem;
`;
const Slides = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
`;

const Slide = styled.div`
  border-radius: 6px;
  overflow: hidden;
`;
const Img = styled.div`
  width: 100%;
  border-radius: 6px;
  transition: all.3s;
`;
const MainImg = styled.div`
  width: 100%;
  border-radius: 8px;
  transition: all.3s;
  object-fit: contain;
  object-position: top;
`;
