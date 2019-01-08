export const sortNameAlpha = (a, b) => (a.name > b.name) ? 1 : -1;

export const getPollDate = (pollId) => {
    const timeStamp = Number(pollId);
    const pollDate = new Date(timeStamp);
    return pollDate.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
