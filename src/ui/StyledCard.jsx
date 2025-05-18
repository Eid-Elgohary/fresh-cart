import styled from "styled-components";

export const StyledCard = styled.div`
  padding: 0 0.5rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  height: ${(props) => props.height || "440px"};
  width: calc(100% / 2);
  
  @media (min-width: 768px) {
    width: calc(100% / 3);
    min-height: ${(props) => props.height || "440px"};
  }
  @media (min-width: 992px) {
    min-height: ${(props) => props.height || "450px"};
    width: calc(100% / 5);
  }
`;
