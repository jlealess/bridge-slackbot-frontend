import { BRIDGEBOT_ACTIONS } from "../../constants";
import { getChannelsList, submitPollQuestion } from "../../api/index";

const savePollGroups = pollGroups => ({
  type: BRIDGEBOT_ACTIONS.SAVE_POLL_GROUPS,
  payload: pollGroups
});

const shapePollData = pollGroups =>
  pollGroups.map(pollGroup => ({ id: pollGroup.id, name: pollGroup.name }));

const submitForm = () => ({
  type: BRIDGEBOT_ACTIONS.SUBMIT_FORM,
});

export const handleChangePollGroup = e => ({
  type: BRIDGEBOT_ACTIONS.SET_POLL_GROUP,
  payload: e.target.value
})

export const handleChangePollQuestion = e => ({
    type: BRIDGEBOT_ACTIONS.SET_POLL_QUESTION,
    payload: e.target.value
});

export const handleFormSubmit = (pollQuestion, selectedPollGroup) => dispatch => {
  
  submitPollQuestion({pollQuestion, selectedPollGroup})
    .then(res => res.json())
    .then(response => {
      console.log(response);
    })
    .then(dispatch(submitForm()));
};

export const fetchPollGroups = () => dispatch => {
  getChannelsList()
    .then(res => res.json())
    .then(response => response.channels)
    .then(pollGroups => shapePollData(pollGroups))
    .then(pollGroups => dispatch(savePollGroups(pollGroups)));
};

