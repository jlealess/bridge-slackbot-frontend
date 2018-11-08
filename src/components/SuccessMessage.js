import React from "react";
import { Link } from "react-router-dom";

const SuccessMessage = ({ savedPollId }) => (
  <div>
    Poll created!{" "}
        <Link to={/polls/`${savedPollId}`}>View poll</Link>
  </div>
);

export default SuccessMessage;