import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => props.theme.bridgeGreen};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  padding: 10px 50px;
`;

const Button = ({ handleClick, label }) => (
  <StyledButton onClick={handleClick}>{label}</StyledButton>
);

export default Button;
