import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Label = ({ forValue, text }) => (
  <StyledLabel htmlFor={forValue}>{text}:</StyledLabel>
);

export default Label;
