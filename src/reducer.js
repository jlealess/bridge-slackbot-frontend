export const BRIDGEBOT_ACTIONS = {
  GET_POLL_QUESTIONS: "bridgebot/GET_POLL_QUESTIONS",
  RESET_FORM: "bridgebot/RESET_FORM",
  SAVE_POLL_ID: "bridgebot/SAVE_POLL_ID",
  SAVE_POLL_GROUPS: "bridgebot/SAVE_POLL_GROUPS",
  SET_POLL_GROUP: "bridgebot/SET_POLL_GROUP",
  SET_POLL_QUESTION: "bridgebot/SET_POLL_QUESTION",
};

export const INITIAL_STATE = {
  pollGroups: [],
  pollQuestion: "",
<<<<<<< HEAD
  polls: [],
=======
>>>>>>> Working on success message component
  savedPollId: "",
  selectedPollGroup: "",
  selectedPollGroupName: "",
  selectedPollGroupUsers: [],
  submitFormSuccess: false,
}

export const reducer = (state = INITIAL_STATE, action) => {
  if (!action) return state;
  switch (action.type) {
    case BRIDGEBOT_ACTIONS.GET_POLL_QUESTIONS: {
      return {
        ...state,
        polls: action.payload,
      }
    }
    case BRIDGEBOT_ACTIONS.RESET_FORM: {
      return {
        ...state,
        pollQuestion: "",
        savedPollId: "",
        selectedPollGroup: "",
        selectedPollGroupName: "",
        submitFormSuccess: true,
      }
    }
    case BRIDGEBOT_ACTIONS.SAVE_POLL_ID: {
      return {
        ...state,
        savedPollId: action.payload,
      }
    }
    case BRIDGEBOT_ACTIONS.SAVE_POLL_GROUPS: {
      return {
        ...state,
        pollGroups: action.payload,
      }
    }
    case BRIDGEBOT_ACTIONS.SAVE_USERS: {
<<<<<<< HEAD
=======
      return {
        ...state,
        selectedPollGroupUsers: action.payload,
      }
    }
    case BRIDGEBOT_ACTIONS.SET_POLL_GROUP: {
>>>>>>> Working on success message component
      return {
        ...state,
        selectedPollGroupUsers: action.payload,
      }
    }
    case BRIDGEBOT_ACTIONS.SET_POLL_GROUP: {
      const pollGroup = action.payload.split("|");
      const pollGroupName = pollGroup[1];
      const pollGroupId = pollGroup[0];
      return {
        ...state,
        selectedPollGroup: pollGroupId,
        selectedPollGroupName: pollGroupName,
        submitFormSuccess: false,
      }
    }
    case BRIDGEBOT_ACTIONS.SET_POLL_QUESTION: {
      return {
        ...state,
        pollQuestion: action.payload,
        submitFormSuccess: false,
      }
    }
    default:
      return state;
  }
};
    