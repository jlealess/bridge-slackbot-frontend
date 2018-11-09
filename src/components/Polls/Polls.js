import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
<<<<<<< HEAD
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


=======
import { getPollQuestions } from "./Polls.actions";

>>>>>>> Adding component that shows all polls
class Polls extends Component {
  componentDidMount() {
    this.props.getPollQuestions();
  }

  render() {
    const { polls } = this.props;

    return <div>
      <h2>Previous Polls</h2>
      
<<<<<<< HEAD
      <PollList>
      {polls.map(poll => (
      <Poll key={poll.id}>
          <Link to={`/poll/${poll.id}`}>
            {poll.pollQuestion}
          </Link>
        </Poll>
      ))}
      </PollList>
=======
      <ul>
      {polls.map(poll => (
      <li key={poll.id}>
          <Link to={`/poll/${poll.id}`}>
            {poll.data.pollQuestion}
          </Link>
        </li>
      ))}
      </ul>
>>>>>>> Adding component that shows all polls
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