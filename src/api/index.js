const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? ""
    : "https://iwabvn0ttj.execute-api.us-east-1.amazonaws.com/dev";


export const getChannelsList = () => fetch(`${API_BASE_URL}/channels-list`);

export const getUsersInChannel = (usergroup) => fetch(`${API_BASE_URL}/user-list`, {
  method: "post",
  body: JSON.stringify({
    usergroup
  })
});

export const submitPollQuestion = (payload) => {
  return fetch(`${API_BASE_URL}/submit-poll-question`, {
    method: "post",
    body: JSON.stringify({
      payload
    }),
  })
}

export const fetchPollQuestions = (payload) => {
  return fetch(`${API_BASE_URL}/polls`, {
    method: "get"
  })
}

export const fetchSinglePollQuestion = (id) => {
  return fetch(`${API_BASE_URL}/poll`, {
    method: "post",
    body: JSON.stringify({
      id
    })
  });
}

