import { BRIDGEBOT_ACTIONS } from "../../reducer";
import {
  getChannelsList,
  getUsersInChannel,
  submitPollQuestion,
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

<<<<<<< HEAD
const saveUsers = users => ({
  type: BRIDGEBOT_ACTIONS.SAVE_USERS,
  payload: users,
=======
const savePolls = polls => ({
    type: BRIDGEBOT_ACTIONS.GET_POLL_QUESTIONS,
    payload: polls
>>>>>>> 8726b72f96bb11a017cb551074d9679365acf0b1
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
<<<<<<< HEAD
=======

export const getPollQuestions = () => dispatch => {
  fetchPollQuestions()
    .then(res => res.json())    
    .then(res => res.message)
    .then(message => dispatch(savePolls(message)));
};
>>>>>>> 8726b72f96bb11a017cb551074d9679365acf0b1

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
<<<<<<< HEAD
=======
    .then(getUsersInChannel(selectedPollGroup))
>>>>>>> 8726b72f96bb11a017cb551074d9679365acf0b1
    .then(dispatch(resetForm()));
};
