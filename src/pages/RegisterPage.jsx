import { Helmet } from "react-helmet";
import Section from "../ui/Section";
import Register from "./../features/authentication/Register";

import { styled } from "styled-components";

function RegisterPage() {
  return (
    <Section>
      <Helmet>
        <title>sign up</title>
      </Helmet>
      <Div>
        <Register />
      </Div>
    </Section>
  );
}

export default RegisterPage;
const Div = styled.div`
  padding: 0 1rem;
  width: 100%;
  margin: auto;

  @media (min-width: 992px) {
    width: 67%;
    overflow: auto;
    height: 70vh;
  }
`;
