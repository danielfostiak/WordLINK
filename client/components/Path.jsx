import React from "react";

function Path(props) {
  const { path, travelPath } = props;

  return (
    <div className="container w-11/12 bg-neutral text-neutral-content mx-auto shadow-xl rounded-xl p-6 mt-4">
      <h2 className="card-title mb-4">Your LINK</h2>
      {path.map((word, i) => (
        <span
          key={i}
          onClick={() => {
            travelPath(word, i);
          }}
          className="btn m-1 badge-outline"
        >
          {word}
        </span>
      ))}
    </div>
  );
}

export default Path;
