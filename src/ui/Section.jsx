import styled from "styled-components";
import Container from "./Container";

function Section({ children }) {
  return (
    <StyledSection as="section">
      <Container>{children}</Container>
    </StyledSection>
  );
}

export default Section;

const StyledSection = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  @media( min-width:992px ) {
    margin-top: 2rem;
    
  }
`;
