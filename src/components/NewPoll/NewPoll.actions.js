import { BRIDGEBOT_ACTIONS } from "../../reducer";
import {
  getChannelsList,
  getUsersInChannel,
  submitPollQuestion,
  fetchPollQuestions
} from "../../api/index";

const resetForm = () => ({
  type: BRIDGEBOT_ACTIONS.RESET_FORM
});

const savePollGroups = pollGroups => ({
  type: BRIDGEBOT_ACTIONS.SAVE_POLL_GROUPS,
  payload: pollGroups
});

const savePollId = id => ({
  type: BRIDGEBOT_ACTIONS.SAVE_POLL_ID,
  payload: id,
});

const savePolls = polls => ({
    type: BRIDGEBOT_ACTIONS.GET_POLL_QUESTIONS,
    payload: polls
});

const shapePollData = pollGroups =>
  pollGroups.map(pollGroup => ({ id: pollGroup.id, name: pollGroup.name }));  

export const fetchPollGroups = () => dispatch => {
  getChannelsList()
    .then(res => res.json())
    .then(response => response.channels)
    .then(pollGroups => shapePollData(pollGroups))
    .then(pollGroups => dispatch(savePollGroups(pollGroups)));
};

export const getPollQuestions = () => dispatch => {
  fetchPollQuestions()
    .then(res => res.json())    
    .then(res => res.message)
    .then(message => dispatch(savePolls(message)));
};

export const handleChangePollGroup = e => ({
  type: BRIDGEBOT_ACTIONS.SET_POLL_GROUP,
  payload: e.target.value,
})

export const handleChangePollQuestion = e => ({
    type: BRIDGEBOT_ACTIONS.SET_POLL_QUESTION,
    payload: e.target.value,
});

export const handleFormSubmit = (pollQuestion, selectedPollGroup) => dispatch => {
  submitPollQuestion({pollQuestion, selectedPollGroup})
    .then(res => res.json())
    .then(res => res.message)
    .then(message => dispatch(savePollId(message)))
    .then(getUsersInChannel(selectedPollGroup))
    .then(dispatch(resetForm()));
};
