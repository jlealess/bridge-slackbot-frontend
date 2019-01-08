import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 1px 3px 6px 0 rgba(0, 0, 0, 0.09);
  padding: 25px;
`;

const Card = (props) => (
  <StyledCard>
    {props.children}
  </StyledCard>
);

export default Card;