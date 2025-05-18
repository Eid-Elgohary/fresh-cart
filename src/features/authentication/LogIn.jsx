import styled from "styled-components";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "./FormRow";
import { useForm } from "react-hook-form";
import useLogIn from "../../hooks/useLogIn";
import { useNavigate } from "react-router-dom";

const passRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{7,})\S$/;
const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

function Login({ onclose, isLoginForm }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, error, isPending } = useLogIn(callback);

  function submit(values) {
    login(values);
  }
  function callback() {
    if(onclose)onclose(false)
      navigate("/home");
  }
  return (
    <>
      <h3 style={{ paddingLeft: "16px" }}>please login </h3>
      <Form onSubmit={handleSubmit(submit)}>
        {error && <ErrorMsg>{error.response.data.message}</ErrorMsg>}

        <FormRow label="email address" error={errors.email?.message}>
          <Input
            size="100%"
            type="email"
            id="email"
            placeholder="enter email address"
            {...register("email", {
              required: "this field is required",
              pattern: {
                value: emailRegex,
                message: "please enter a valid email",
              },
            })}
          />
        </FormRow>
        <FormRow label="password" error={errors.password?.message}>
          <Input
            size="100%"
            type="password"
            id="password"
            placeholder="enter password"
            {...register("password", {
              required: "this field is required",
              minLength: {
                value: 8,
                message: "the password must be 8 chracters at least",
              },
              pattern: {
                value: passRegex,
                message:
                  "must contain at least one uppercase letter, one lowercase letter, and one number",
              },
            })}
          />
        </FormRow>

        <Button disabled={isPending}>
          {isPending ? "loading..." : "log in"}
        </Button>
      </Form>
      {isLoginForm || (
        <Pragraph>
          don&apos;t have an account?
          <Span onClick={() => navigate("/register")}>sign up</Span>
        </Pragraph>
      )}
    </>
  );
}

export default Login;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
`;
const ErrorMsg = styled.div`
  color: var(--danger);
  font-size: 14px;
  align-items: center;
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
