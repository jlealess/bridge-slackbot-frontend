import React, { Component } from 'react';
import Chart from "../Chart";
import { fetchSinglePollQuestion, fetchPollResponses } from "../../api/index";

class Poll extends Component {
  constructor() {
    super();
    this.state = {
      pollGroup: "",
      pollId: "",
      pollQuestion: "",
      yesCount: 0,
      noCount: 0,
      maybeCount: 0,
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
    this.getResponses(pollId)
      .then(res => res.json())
      .then(res => res.message)
      .then(res => this.filterResponses(res));
  }

  filterResponses = (responses) => {
    const noCount = (responses.filter(response => response.data.answer === "no")).length;
    const yesCount = (responses.filter(response => response.data.answer === "yes")).length;
    const maybeCount = (responses.filter(response => response.data.answer === "maybe")).length;

    this.setState({
      noCount,
      yesCount,
      maybeCount,
    })
  }

  getPoll = (id) => {
    return fetchSinglePollQuestion(id);
  }

  getResponses = (id) => {
    return fetchPollResponses(id);
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
        <Chart yes={this.state.yesCount} no={this.state.noCount} maybe={this.state.maybeCount} />
      </div>
    );
  }
}

export default Poll;
