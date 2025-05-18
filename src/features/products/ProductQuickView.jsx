import styled from "styled-components";

import QuickViewSlider from "./QuickView Slider";
import QuickViewActions from "./QuickViewActions";

function ProductQuickView({
  item,
  setIsWishlist,
  isWishlist,
  height = "auto",
}) {
  const { images, title } = item;

  return (
    <Container height={height}>
      <Child>
        <QuickViewSlider images={images} alt={title} />
      </Child>
      <Child>
        <QuickViewActions
          item={item}
          isWishlist={isWishlist}
          setIsWishlist={setIsWishlist}
        />
      </Child>
    </Container>
  );
}

export default ProductQuickView;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 6px;
  margin-top: 32px;
  height: ${(props) => props.height || "600px"};
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;
const Child = styled.div`
  padding: 0 1rem;
  width: 100%;

  @media (min-width: 992px) {
    width: 50%;
  }
`;
