import styled from "styled-components";

function WishlistHeader({ count }) {
  return (
    <Heading>
      <H1>my wishlist</H1>
      <P>There are {count} products in this wishlist.</P>
    </Heading>
  );
}

export default WishlistHeader;

const Heading = styled.div`
  margin-bottom: 2rem;
`;
const H1 = styled.h1`
  margin-bottom: 0.25rem;
  letter-spacing: -0.03rem;
  font-weight: 600;
  line-height: 1.2;
  font-size: 27px;

  @media (min-width: 768px) {
    font-size: 29.5px;
  }
  @media (min-width: 992px) {
    font-size: 32.5px;
  }
`;
const P = styled.p`
  margin-bottom: 1rem;
  font-size: 14px;
  color: var(--text-light);
  line-height: 22.5px;
  font-weight: 500;
`;
