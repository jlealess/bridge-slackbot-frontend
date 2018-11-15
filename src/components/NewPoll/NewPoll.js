import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../Button";
import Input from "../Input";
import Label from "../Label";
import Select from "../Select";
import SuccessMessage from "../SuccessMessage";
import {
  fetchPollGroups,
  handleChangePollGroup,
  handleChangePollQuestion,
  handleFormSubmit
} from "./NewPoll.actions";

const StyledPoll = styled.div`
  color: ${props => props.theme.black};
`;

class NewPoll extends Component {
  componentDidMount() {
    this.props.fetchPollGroups();
  }

  render() {
    const {
      handleChangePollGroup,
      handleChangePollQuestion,
      handleFormSubmit,
      pollGroups,
      pollQuestion,
      savedPollId,
      selectedPollGroup,
      submitFormSuccess
    } = this.props;

    return (
      <StyledPoll>
        <h2>Create New Poll</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleFormSubmit(pollQuestion, selectedPollGroup);
          }}
        >
          <div>
            <Label forValue="pollQuestion" text="Question" />
            <Input
              type="text"
              value={pollQuestion}
              handleChange={handleChangePollQuestion}
              name="pollQuestion"
            />
          </div>
          <div>
            <Label forValue="pollUserGroup" text="Channel" />
            <Select
              name="pollGroups"
              value={selectedPollGroup}
              values={pollGroups}
              handleChange={handleChangePollGroup}
            />
          </div>
          <div>
            {submitFormSuccess ? (
              <SuccessMessage savedPollId={savedPollId} />
            ) : (
              <Button
                label="Submit Poll"
                disabled={!(pollQuestion.length && selectedPollGroup.length)}
              />
            )}
          </div>
        </form>
      </StyledPoll>
    );
  }
}

const mapStateToProps = state => ({
  pollGroups: state.pollGroups,
  pollQuestion: state.pollQuestion,
  savedPollId: state.savedPollId,
  selectedPollGroup: state.selectedPollGroup,
  submitFormSuccess: state.submitFormSuccess
});

const mapDispatchToProps = {
  fetchPollGroups,
  handleChangePollGroup,
  handleChangePollQuestion,
  handleFormSubmit
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPoll);
