import React, { Component } from 'react';
import { fetchSinglePollQuestion } from "../../api/index";

class Poll extends Component {
  constructor() {
    super();
    this.state = {
      pollGroup: "",
      pollQuestion: "",
    }
  }

  componentDidMount() {
    const {pollId} = this.props.match.params;
    this.getPoll(pollId)
      .then(res => res.json())      
      .then(res => res.message)
      .then(message =>
        this.setState({
          pollGroup: message.selectedPollGroup,
          pollQuestion: message.pollQuestion
        })
      );
  }

  getPoll = (id) => {
    return fetchSinglePollQuestion(id);
  }

  render() {
    return (
      <div className="poll">
        <h2>Poll results</h2>
        <h3>{this.state.pollQuestion}</h3>
        <p>Group asked: @{this.state.pollGroup}</p>
      </div>
    );
  }
}

export default Poll;
