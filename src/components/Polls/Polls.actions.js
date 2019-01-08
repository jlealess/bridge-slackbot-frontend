import { BRIDGEBOT_ACTIONS } from "../../reducer";
import {
  fetchPollQuestions
} from "../../api/index";

const savePolls = polls => ({
  type: BRIDGEBOT_ACTIONS.GET_POLL_QUESTIONS,
  payload: polls
});

export const getPollQuestions = () => dispatch => {
  fetchPollQuestions()
    .then(res => res.json())
    .then(res => res.message)
    .then(message => dispatch(savePolls(message)));
};

export const setSortedBy = e => {
  const sortedBy = e.target.value;
  return {
      type: BRIDGEBOT_ACTIONS.SET_SORTED_BY,
      payload: sortedBy
  }
};
