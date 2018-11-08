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

const saveUsers = users => ({
  type: BRIDGEBOT_ACTIONS.SAVE_USERS,
  payload: users
});

const shapePollData = pollGroups =>
  pollGroups.map(pollGroup => ({ id: pollGroup.id, name: pollGroup.name }));  

// const setSuccessMessage = pollId => 

export const handleChangePollGroup = e => ({
  type: BRIDGEBOT_ACTIONS.SET_POLL_GROUP,
  payload: e.target.value
})

export const handleChangePollQuestion = e => ({
    type: BRIDGEBOT_ACTIONS.SET_POLL_QUESTION,
    payload: e.target.value
});

export const handleFormSubmit = (pollQuestion, selectedPollGroup) => dispatch => {
  getUsersInChannel(selectedPollGroup)
    .then(res => res.json())
    .then(response => response.members)
    .then(users => dispatch(saveUsers(users)));

  const pollId = Date.now();  
  
  submitPollQuestion({pollQuestion, selectedPollGroup, pollId})
    .then(res => res.json())
    .then(res => console.log(res))
    .then(dispatch(resetForm()));
};

export const fetchPollGroups = () => dispatch => {
  getChannelsList()
    .then(res => res.json())
    .then(response => response.channels)
    .then(pollGroups => shapePollData(pollGroups))
    .then(pollGroups => dispatch(savePollGroups(pollGroups)));
};

export const getPollQuestions = () => (dispatch) => fetchPollQuestions().then(res => dispatch({
  type: BRIDGEBOT_ACTIONS.GET_POLL_QUESTIONS,
  payload: res
}))
