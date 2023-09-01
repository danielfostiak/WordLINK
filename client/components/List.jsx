import React from "react";

function List(props) {
  const { list, color, updateWord } = props;

  return (
    <div className="container mt-4 w-1/2 text-center">
      {list.map((word, i) => (
        <button
          onClick={() => updateWord(word)}
          key={i + word}
          className={`btn ${color} m-1 shadow-xl font-bold`}
        >
          {word}
        </button>
      ))}
    </div>
  );
}

export default List;
