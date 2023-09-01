import React from "react";

function CurrentWord(props) {
  const { word, definition } = props;
  return (
    <div className="card w-11/12 bg-neutral text-neutral-content mx-auto shadow-xl mt-4">
      <div className="card-body">
        <h1 className="card-title text-4xl mb-4">"{word}"</h1>
        <p>{definition}.</p>
      </div>
    </div>
  );
}

export default CurrentWord;
