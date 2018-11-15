import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getPollQuestions } from "./Polls.actions";

const PollList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Poll = styled.li`
  padding: 10px 0;
`;


class Polls extends Component {
  componentDidMount() {
    this.props.getPollQuestions();
  }

  render() {
    const { polls } = this.props;

    return <div>
      <h2>Previous Polls</h2>
      
      <PollList>
      {polls.map(poll => (
      <Poll key={poll.id}>
          <Link to={`/poll/${poll.id}`}>
            {poll.pollQuestion}
          </Link>
        </Poll>
      ))}
      </PollList>
    </div>;
  }
}

const mapStateToProps = (state) => ({
  polls: state.polls,
});

const mapDispatchToProps = {
  getPollQuestions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Polls);