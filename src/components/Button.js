import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => (props.primary ? props.theme.bridgeGreen : props.theme.offWhite)};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => (props.primary ? "white" : props.theme.bridgeGreen)};
  font-size: 2rem;
  font-weight: bold;
  padding: 10px 50px;
`;

const Button = ({ handleClick, label, primary, disabled }) => (
  <StyledButton onClick={handleClick} primary={primary} disabled={disabled}>{label}</StyledButton>
);

export default Button;
