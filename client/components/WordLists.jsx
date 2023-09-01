import React from "react";
import List from "./List";

function WordLists(props) {
  const { synonyms, antonyms, updateWord } = props;
  return (
    <div className="container flex flex-row">
      <List color="btn-primary" list={synonyms} updateWord={updateWord} />
      <List color="btn-accent" list={antonyms} updateWord={updateWord} />
    </div>
  );
}

export default WordLists;
