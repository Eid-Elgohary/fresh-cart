import styled from "styled-components";

function FormRow({ label, error, req = true, children }) {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      {label && (
        <Label htmlFor={children.props.id}>
          {label}
          {req && <Span> *</Span>}
        </Label>
      )}
      {children}
      {error && <Error>{error}</Error>}
    </div>
  );
}

export default FormRow;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: var(--label);
  margin-bottom: 6px;
  display: block;
`;
const Span = styled.span`
  color: var(--danger);
`;
const Error = styled.p`
  margin-top: 6px;
  font-size: 12px;
  color: var(--danger);
`;
