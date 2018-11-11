import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => props.theme.bridgeGreen};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => "white"};
  font-size: 2rem;
  font-weight: bold;
  padding: 10px 50px;
  transition: all 0.5s ease-in-out;

  &:disabled {
    opacity: 0.7;
  }

  &:not(:disabled):hover {
    background-color: ${props => props.theme.bridgeLogoTurquoise};
  }
`;

const Button = ({ handleClick, label, disabled }) => (
  <StyledButton onClick={handleClick} disabled={disabled}>{label}</StyledButton>
);

export default Button;
