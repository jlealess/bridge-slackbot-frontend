import React, { Component } from 'react';
import styled from "styled-components";
import { fetchSinglePollQuestion, fetchPollResponses } from "../../api/index";
import { getPollDate } from "../../helpers";
import Card from "../Card";
import Chart from "../Chart";
import Headline from "../Headline";

const StyledPoll = styled.div`
  .poll__headline {
    font-size: 2.4rem;
    margin: 0 0 1rem 0;
  }

  .poll__meta {
    color: rgba(0, 0, 0, 0.54);
    font-size: 1.6rem;
    margin: 0;
    padding-bottom: .7rem;
  }
`;

class Poll extends Component {
  constructor() {
    super();
    this.state = {
      dataLoaded: false,
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
      dataLoaded: true,
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
  
  render() {
    return <StyledPoll>
        <Headline headline="Poll Results" />
        <Card>
          <h3 className="poll__headline">{this.state.pollQuestion}</h3>
          <p className="poll__group poll__meta">Group asked: @{this.state.pollGroup}</p>
          <p className="poll__date poll__meta">
            {this.state.pollId && getPollDate(this.state.pollId)}
          </p>
          {this.state.dataLoaded && <Chart yes={this.state.yesCount} no={this.state.noCount} maybe={this.state.maybeCount} />}
        </Card>
      </StyledPoll>;
  }
}

export default Poll;
