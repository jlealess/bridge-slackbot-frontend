import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getPollDate } from "../helpers";
import Card from "./Card";

const StyledPollList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Poll = styled.li`
  padding: 10px 0;

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    padding-bottom: 20px;
  }

  .poll__meta {
    margin-top: 5px;
  }

  .poll__meta__group {
    &:before {
      content: "@";
    }
  }

  .poll__meta__el {
    color: rgba(0, 0, 0, 0.54);
    display: inline-block;
    font-size: 1.4rem;

    &:not(:last-of-type)::after {
      content: "\00a0•\00a0";
    }
  }

  .poll__question {
    font-weight: bold;
  }
`;

const PollList = props => (
  <StyledPollList>
    {props.polls.map(poll => <Poll key={poll.id}>
      <Card>
        <Link to={`/poll/${poll.id}`}>
          <div>
            <div className="poll__question">
              {poll.data.pollQuestion}
            </div>
            <div className="poll__meta">
              <span className="poll__meta__el poll__meta__date">
                {getPollDate(poll.id)}
              </span>
              {poll.data.selectedPollGroupName && <span className="poll__meta__el poll__meta__group">
                {poll.data.selectedPollGroupName}
              </span>}
            </div>
          </div>
        </Link>
      </Card>
    </Poll>)}
  </StyledPollList>
);

export default PollList;