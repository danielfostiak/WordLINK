import React from "react";

function Challenge(props) {
  const { start, end } = props;
  return (
    <div className="card w-11/12 bg-base-100 shadow-xl mx-auto mt-4">
      <div className="card-body ">
        <h2 className="card-title">Today's Challenge</h2>
        {/* <h2 className="card-title">SF Pro Display Font</h2> */}
        {/* <p>{`Go from the word ${start} to '${end}'`}</p> */}
        <p>
          Go from <strong>"{start}"</strong> to <strong>"{end}"</strong>. Jump
          from word to word via synonyms and antonyms. Click the{" "}
          <strong>"WordLINK"</strong> to swap the direction. Click on words in{" "}
          <strong>Your LINK</strong> to travel to them.
        </p>
      </div>
    </div>
  );
}

export default Challenge;
