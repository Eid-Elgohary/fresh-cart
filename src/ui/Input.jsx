import styled from "styled-components";

const Input = styled.input`
  padding: 8.8px 16px;
  padding-left: 5px;
  font-size: 14px;
  color: var(--text-dark);
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid var(--border);
  display: block;

  &:focus {
    background-color: #fff;
    border-color: #85d685;
    box-shadow: 0 0 0 0.25rem rgba(10, 173, 10, 0.25);
    color: var(--text-dark);
    outline: 0;
  }
  width: ${(props) => props.size || ""};
`;
export default Input;
