import { BRIDGEBOT_ACTIONS } from "./constants";

export const INITIAL_STATE = {
  pollGroups: [],
  pollQuestion: "",
  selectedPollGroup: "",
}

export const reducer = (state = INITIAL_STATE, action) => {
  if (!action) return state;
  switch (action.type) {
    case BRIDGEBOT_ACTIONS.SAVE_POLL_GROUPS: {
      return {
        ...state,
        pollGroups: action.payload,
      }
    }
    case BRIDGEBOT_ACTIONS.SET_POLL_GROUP: {
      return {
        ...state,
        selectedPollGroup: action.payload,
      }
    }
    case BRIDGEBOT_ACTIONS.SET_POLL_QUESTION: {
      return {
        ...state,
        pollQuestion: action.payload,
      }
    }
    case BRIDGEBOT_ACTIONS.SUBMIT_FORM: {
      return state;
    }
    default:
      return state;
  }
};
    