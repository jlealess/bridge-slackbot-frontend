import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background: transparent;
  border: 2px solid ${props => props.theme.darkGrey};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.black};
  margin-bottom: 30px;
  padding: 10px;
  width: 100%;
`;

const Input = ({ handleChange, name, type, value }) => (
  <StyledInput 
    type={type} 
    value={value} 
    onChange={handleChange} 
    name={name} 
    id={name} 
  />
);

export default Input;
