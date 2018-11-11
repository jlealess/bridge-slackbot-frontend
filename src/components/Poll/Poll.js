import React, { Component } from 'react';
import Chart from "../Chart";
import { fetchSinglePollQuestion } from "../../api/index";

class Poll extends Component {
  constructor() {
    super();
    this.state = {
      pollGroup: "",
      pollId: "",
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
          pollGroup: message.selectedPollGroupName || message.selectedPollGroup,
          pollId: message.pollId,
          pollQuestion: message.pollQuestion
        })
      );
  }

  getPoll = (id) => {
    return fetchSinglePollQuestion(id);
  }

  getDate = () => {
    const timeStamp = Number(this.state.pollId);
    const pollDate = new Date(timeStamp);
    return pollDate.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
      // hour: "numeric",
      // minute: "numeric",
    });
  }

  render() {
    return (
      <div className="poll">
        <h2>Poll results</h2>
        <h3>{this.state.pollQuestion}</h3>
        <p className="poll-group">Group asked: @{this.state.pollGroup}</p>
        <p className="date">{this.state.pollId && this.getDate()}</p>
      </div>
    );
  }
}

export default Poll;
