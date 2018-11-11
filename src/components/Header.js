import React from "react";
import bridgeLogo from "./../bridgeLogo.svg";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const StyledImg = styled.img`
  width: 80px;
`; 

const StyledHeader = styled.header`
  align-items: center;
  background: #ffffff;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.09);
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 25px 30px;

  a {
    border: none;
  }

  h1 {
    color: ${props => props.theme.bridgeLogoBlue};
    font-size: 3.2rem;
    margin: 0;
    margin-left: 15px;
  }
  
  .logo {
    align-items: center;
    display: flex;
  }
`;

const StyledNav = styled.nav`
  a {
    border-bottom: 2px solid ${props => props.theme.bridgeLogoBlue};
    color: ${props => props.theme.bridgeLogoBlue};
    font-weight: bold;
    margin-left: 25px;

    &:hover {
      color: ${props => props.theme.bridgeLogoTurquoise};
    }

    &.current {
      border-bottom: 2px solid ${props => props.theme.bridgeLogoPink};
    }
  }
`;

const Header = () => (
  <StyledHeader>
      <Link to={"/"}>
        <div className="logo">        
          <StyledImg src={bridgeLogo} alt="bridge logo" />
          <h1>BridgeBot</h1>
        </div>
      </Link>  
      <StyledNav>
        <NavLink activeClassName="current" to={"/new-poll"}>New Poll</NavLink>
        <NavLink activeClassName="current" to={"/polls"}>All Polls</NavLink>
      </StyledNav>

  </StyledHeader>
);

export default Header;
