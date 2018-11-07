export const BRIDGEBOT_ACTIONS = {
  GET_POLL_QUESTIONS: "bridgebot/GET_POLL_QUESTIONS",
  RESET_FORM: "bridgebot/RESET_FORM",
  SAVE_POLL_GROUPS: "bridgebot/SAVE_POLL_GROUPS",
  SAVE_USERS: "bridgebot/SAVE_USERS",
  SET_POLL_GROUP: "bridgebot/SET_POLL_GROUP",
  SET_POLL_QUESTION: "bridgebot/SET_POLL_QUESTION",
};

export const INITIAL_STATE = {
  pollGroups: [],
  pollQuestion: "",
  selectedPollGroup: "",
  selectedPollGroupUsers: [],
  polls: [],
}

export const reducer = (state = INITIAL_STATE, action) => {
  if (!action) return state;
  switch (action.type) {
    case BRIDGEBOT_ACTIONS.RESET_FORM: {
      return {
        ...state,
        pollQuestion: "",
        selectedPollGroup: "",
      }
    }
    case BRIDGEBOT_ACTIONS.SAVE_USERS: {
      return {
        ...state,
        selectedPollGroupUsers: action.payload
      }
    }
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
    case BRIDGEBOT_ACTIONS.GET_POLL_QUESTIONS: {
      return {
        ...state,
        polls: action.payload,
      }
    }
    default:
      return state;
  }
};
    