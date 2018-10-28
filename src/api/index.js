const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? ""
    : "https://iwabvn0ttj.execute-api.us-east-1.amazonaws.com/dev";

export const pollGroup = () =>
  fetch(`${API_BASE_URL}/poll-group`, {
    method: "post",
    body: JSON.stringify({
      channel: "slackbot-testing"
    })
  })
    .then(res => res.json())
    .then(response => {
      console.log(response);
    });

export const getChannelsList = () => 
  fetch(`${API_BASE_URL}/channels-list`)
    .then(res => res.json())
    .then(response => {
      console.log(response);
    });
