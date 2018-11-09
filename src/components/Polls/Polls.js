import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPollQuestions } from "./Polls.actions";

class Polls extends Component {
  componentDidMount() {
    this.props.getPollQuestions();
  }

  render() {
    const { polls } = this.props;

    return <div>
      <h2>Previous Polls</h2>
      
      <ul>
      {polls.map(poll => (
      <li key={poll.id}>
          <Link to={`/poll/${poll.id}`}>
            {poll.data.pollQuestion}
          </Link>
        </li>
      ))}
      </ul>
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