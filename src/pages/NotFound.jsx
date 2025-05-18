import { Link } from "react-router-dom";
import Button from "../ui/Button";
import styled from "styled-components";
import errorBg from "../../public/error.svg";
import Section from "../ui/Section";
import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <Section>
      <Helmet>
        <title>not found</title>
      </Helmet>
      <Container>
        <Parent>
          <Child>
            <H1>Something’s wrong here...</H1>
            <P>
              We can’t find the page you’re looking for. <br /> Check out our
              help center or head back to home.
            </P>
            <div>
              <Button width="150px" as={Link} to="/home">
                back to home ⬅
              </Button>
            </div>
          </Child>
          <Child>
            <img src={errorBg} style={{ width: "100%" }} alt="not found" />
          </Child>
        </Parent>
      </Container>
    </Section>
  );
}

export default NotFound;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Parent = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  height: 90vh;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Child = styled.div`
  padding: 1rem;
  text-align: start;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const H1 = styled.h1`
  color: #21313c;
  font-size: 28px;
  letter-spacing: -0.48px;
  margin-bottom: 8px;
  font-weight: 600;
`;
const P = styled.p`
  color: #5c6c75;
  font-weight: 500;
  margin-bottom: 32px;
`;
