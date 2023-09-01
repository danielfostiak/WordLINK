import React from "react";

function Path(props) {
  const { path } = props;

  return (
    <div className="container w-11/12 bg-neutral text-neutral-content mx-auto shadow-xl rounded-md p-6 mt-4">
      <h2 className="card-title mb-4">Your Path</h2>
      {path.map((word, i) => (
        <span className="badge badge-outline" key={i}>
          {word}{" "}
        </span>
      ))}
    </div>
  );
}

export default Path;
