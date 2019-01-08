import React from "react";
import bridgeLogo from "./../bridgeLogo.svg";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const StyledImg = styled.img`
  width: 80px;
`; 

const StyledHeader = styled.header`
  background: #ffffff;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.09);
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

  .header__inner {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .logo {
    align-items: center;
    display: flex;
  }

  @media (max-width: 500px) {
    justify-content: flex-start;
    line-height: 2;
    flex-wrap: wrap;
    padding: 10px 30px 20px;
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

    @media (max-width: 500px) {
      margin: 10px 25px 10px 0;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="content-wrapper">
      <div className="header__inner">
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
      </div>
    </div>
  </StyledHeader>
);

export default Header;
