import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
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
=======

const SuccessMessage = ({ savedPollId }) => (
  <div>
    Poll created!{" "}
        <Link to={/polls/`${savedPollId}`}>View poll</Link>
  </div>
>>>>>>> Working on success message component
);

export default SuccessMessage;