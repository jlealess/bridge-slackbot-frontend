import React from "react";

const Poll = (props) => {
  const {pollId} = props.match.params;

  return (
    <div className="poll">
      <h2>Poll results for {pollId}</h2>
    </div>
  )
}

export default Poll;
