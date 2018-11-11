import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMessage = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 10px 0;
<<<<<<< HEAD
=======

  a {
    color: ${props => props.theme.bridgeLogoBlue};
  }
>>>>>>> 8726b72f96bb11a017cb551074d9679365acf0b1
`;

const SuccessMessage = ({ savedPollId }) => (
  <StyledMessage>
    Poll created!{" "}
    <Link to={`/poll/${savedPollId}`}>View poll</Link>
  </StyledMessage>
);

export default SuccessMessage;