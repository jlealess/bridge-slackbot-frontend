import React from "react";
import styled from "styled-components";
import { sortNameAlpha } from "../helpers";

const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='${props =>
    props.theme.darkGrey}'><polygon points='0,0 20,0 10,10'/></svg>");
  background-position-x: calc(100% - 10px);
  background-position-y: 15px;
  background-repeat: no-repeat;
  border: 2px solid ${props => props.theme.darkGrey};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.black};
  font-weight: bold;
  height: 45px;
  margin-bottom: 30px;
  padding: 10px;
  position: relative;
  width: 100%;
`;

const Select = ({ handleChange, name, values, value }) => (
  <StyledSelect name={name} value={value} id={name} onChange={handleChange}>
    <option value="">Select a group</option>
    {values.sort(sortNameAlpha).map(value => (
      <option value={value.id} key={value.id}>
        {value.name}
      </option>
    ))}
  </StyledSelect>
);

export default Select;
