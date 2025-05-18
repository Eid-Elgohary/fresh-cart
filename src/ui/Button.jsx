import styled, { css } from "styled-components";
const sizes = {
  smallest: css`
    padding: 3.7px 6.8px;
    font-size: 10.5px;
    font-weight: 700;
    border-radius: 4px;
  `,
  small: css`
    padding: 4px 8px;
    font-size: 12.25px;
    border-radius: 4px;
    font-weight: 600;
  `,
  medium: css`
    padding: 8.8px 16px;
    font-size: 14px;
    border-radius: 8px;
    font-weight: 600;
  `,
  large: css`
    padding: 8.8px 24px;
    font-size: 14px;
    border-radius: 8px;
    font-weight: 600;
  `,
};
const variations = {
  primary: css`
    background: var(--main-color);
    color: var(--text-lightest);
    &:hover {
      background: var(--hover-primary);
    }
  `,
  secondary: css`
    background: var(--secondary-color);
    color: var(--text-lightest);
    &:hover {
      background: var(--hover-secondary);
    }
  `,
  danger: css`
    background: var(--danger);
    color: var(--text-lightest);
    &:hover {
      background: var(--hover-danger);
    }
  `,
  pale: css`
    background: var(--text-lightest);
    color: var(--text-light);
    border: 1px solid var(--border);
    &:hover {
      background: var(--hover-pale);
    }
  `,
};

const Button = styled.button`
  width: ${(props) => props.width || ""};
  border: none;
  cursor: pointer;
  display: block;
  white-space: nowrap;
  text-align: center;
  text-decoration: none;
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  size: "medium",
  variation: "primary",
};
export default Button;
