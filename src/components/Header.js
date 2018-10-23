import React from "react";
import bridgeLogo from "./../bridgeLogo.svg";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 80px;
`; 

const StyledHeader = styled.header`
  align-items: center;
  background: #ffffff;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.09);
  display: flex;
  padding: 20px 30px;
  h1 {
    color: ${props => props.theme.bridgeBlue};
    margin: 0;
    margin-left: 15px;
  }
`;

const Header = () => (
  <StyledHeader>
    <StyledImg src={bridgeLogo} alt="bridge logo" />
    <h1>BridgeBot</h1>
  </StyledHeader>
);

export default Header;
