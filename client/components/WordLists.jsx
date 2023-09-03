import React from "react";
import List from "./List";

function WordLists(props) {
  const { synonyms, antonyms, addWord } = props;
  return (
    <div className="container md:flex md:flex-row">
      <List color="btn-primary" list={synonyms} addWord={addWord} />
      <List color="btn-accent" list={antonyms} addWord={addWord} />
    </div>
  );
}

export default WordLists;
