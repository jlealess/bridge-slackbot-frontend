import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMessage = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 10px 0;

  a {
    color: ${props => props.theme.bridgeLogoBlue};
  }
`;

const SuccessMessage = ({ savedPollId }) => (
  <StyledMessage>
    Poll created!{" "}
    <Link to={`/poll/${savedPollId}`}>View poll</Link>
  </StyledMessage>
);

export default SuccessMessage;