import { Helmet } from "react-helmet";
import Login from "../features/authentication/LogIn";
import Section from "./../ui/Section";
import { styled } from "styled-components";

function LoginPage() {
  return (
    <Section>
      <Helmet>
        <title>login</title>
      </Helmet>
      <Div>
        <Login />
      </Div>
    </Section>
  );
}

export default LoginPage;
const Div = styled.div`
  padding: 0 1rem;
  width: 100%;
  margin: auto;
  /* display: flex;
  justify-content: center;
  flex-direction: column; */

  @media (min-width: 992px) {
    width: 67%;
    overflow: auto;
    height: 70vh;
  }
`;
