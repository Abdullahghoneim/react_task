import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 8px;
  border: 2px solid #e26e8a;
  color: #e26e8a;
  margin: 0 1em;
  padding: 0.5em 1.8em;

  ${(props) =>
    props.primary &&
    css`
      background: #e26e8a;
      color: white;
    `};
`;

export default Button;
