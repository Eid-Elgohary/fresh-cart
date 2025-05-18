import styled from "styled-components";
import { useState } from "react";
import Register from "./Register";
import Login from "./LogIn";

function LoginForm({ onclose, isLoginForm }) {
  const [isRegister, setIsRegister] = useState(false);

  if (isRegister)
    return (
      <>
        <Header>sign up</Header>
        <Register onclose={onclose} isLoginForm={isLoginForm} />
        <Pragraph>
          already have an account?
          <Span onClick={() => setIsRegister(false)}>login</Span>
        </Pragraph>
      </>
    );
  return (
    <>
      <Header>login</Header>
      <Login onclose={onclose} isLoginForm={isLoginForm} />
      <Pragraph>
        don&apos;t have an account?
        <Span onClick={() => setIsRegister(true)}>sign up</Span>
      </Pragraph>
    </>
  );
}

export default LoginForm;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 28px;
`;

const Pragraph = styled.p`
  font-size: 14px;
  padding: 12px;
  text-align: center;
  color: var(--text-light);
`;
const Span = styled.span`
  color: var(--main-color);
  cursor: pointer;
`;
