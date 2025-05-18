import styled from "styled-components";
import { StyledCard } from "../../ui/StyledCard";

function CategoryItem({ category }) {
  const { image, name } = category;

  return (
    <StyledCard>
      <CardBody>
        <div>
          <img src={image} width="100%" alt={name} />
        </div>
        <H2>{name}</H2>
      </CardBody>
    </StyledCard>
  );
}

export default CategoryItem;
const CardBody = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 390px;
  &:hover {
    border-color: var(--main-color);
  }
  &:hover > h2 {
    color: var(--main-color);
  }
`;
const H2 = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-light);
`;
