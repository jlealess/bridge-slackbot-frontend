import { BRIDGEBOT_ACTIONS } from "../../reducer";
import {
  getChannelsList,
  getUsersInChannel,
  submitPollQuestion
} from "../../api/index";

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

const resetForm = () => ({
  type: BRIDGEBOT_ACTIONS.RESET_FORM,
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
  getUsersInChannel(selectedPollGroup)
    .then(res => res.json())
    .then(response => response.members)
    .then(users => dispatch(saveUsers(users)));
  
  submitPollQuestion({pollQuestion, selectedPollGroup})
    .then(res => res.json())
    .then(dispatch(resetForm()));
};

export const fetchPollGroups = () => dispatch => {
  getChannelsList()
    .then(res => res.json())
    .then(response => response.channels)
    .then(pollGroups => shapePollData(pollGroups))
    .then(pollGroups => dispatch(savePollGroups(pollGroups)));
};

