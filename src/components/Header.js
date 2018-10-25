import React from "react";
import bridgeLogo from "./../bridgeLogo.svg";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 80px;
`; 

const StyledHeader = styled.header`
  background: #ffffff;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.09);
  margin-bottom: 30px;
  padding: 20px 0;
  h1 {
    color: ${props => props.theme.bridgeLogoBlue};
    font-size: 3.2rem;
    margin: 0;
    margin-left: 15px;
  }
  .content-wrapper {
    align-items: center;
    display: flex;
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="content-wrapper">
      <StyledImg src={bridgeLogo} alt="bridge logo" />
      <h1>BridgeBot</h1>
    </div>
  </StyledHeader>
);

export default Header;
