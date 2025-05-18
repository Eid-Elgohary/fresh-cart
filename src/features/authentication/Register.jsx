import styled from "styled-components";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "./FormRow";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "../../hooks/useSignUp";

const passRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{7,})\S$/;
const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

function Register({ onclose, isLoginForm }) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const { isPending, signUp, error } = useSignUp(callback);
  const navigate = useNavigate();

  function submit(values) {
    signUp(values);
  }

  function callback() {
    onclose(false);
    navigate("login");
  }
  return (
    <Form onSubmit={handleSubmit(submit)}>
      {error && <ErrorMsg>{error.response.data.message}</ErrorMsg>}

      <FormRow label="name" error={errors.name?.message}>
        <Input
          size="100%"
          id="name"
          placeholder="enter your name"
          {...register("name", { required: "this field is required" })}
        />
      </FormRow>

      <FormRow label="email address" error={errors.email?.message}>
        <Input
          size="100%"
          id="email"
          placeholder="enter email address"
          {...register("email", {
            required: "this field is required",
            pattern: {
              value: emailRegex,
              message: "please enter a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow label="password" error={errors.password?.message}>
        <Input
          type="password"
          size="100%"
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

      <FormRow label="confirm password" error={errors.rePassword?.message}>
        <Input
          size="100%"
          type="password"
          id="rePassword"
          placeholder="confirm password"
          {...register("rePassword", {
            required: "this field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRow>

      <Pragraph>
        By Signup, you agree to our <Span>Terms of Service</Span> &
        <Span> Privacy Policy</Span>
      </Pragraph>
      <Button disabled={isPending}>
        {isPending ? "loading..." : "sign up"}{" "}
      </Button>
      {isLoginForm || (
        <Pragraph>
          already have an account?
          <Span onClick={() => navigate("/login")}>login</Span>
        </Pragraph>
      )}
    </Form>
  );
}

export default Register;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
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
const ErrorMsg = styled.div`
  text-align: center;
  color: var(--danger);
  font-size: 14px;
  padding: 6px 0;
`;
