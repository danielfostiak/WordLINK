"use client";
import React, { useEffect, useState } from "react";

import Nav from "./components/Nav";
import Challenge from "./components/Challenge";
import CurrentWord from "./components/CurrentWord";
import WordLists from "./components/WordLists";
import Path from "./components/Path";
import GameOverModal from "./components/GameOverModal";

import getWord from "@/api/apiCalls";

export default function Game({ todaysChallengeData, todaysWordData, apiKey }) {
  const [challengeData, setChallengeData] = useState(todaysChallengeData);
  const [wordData, setWordData] = useState(todaysWordData);
  const [path, setPath] = useState([]);
  const [playing, setPlaying] = useState(true);

  const updateWord = async function (word) {
    if (!playing) return;
    const data = await getWord(word, apiKey);
    console.log(data);
    setWordData(data);
    setPath([...path, word]);
    if (checkWin(word)) {
      setPlaying(false);
      window.my_modal_1.showModal();
    }
  };

  const checkWin = function (word) {
    return word == challengeData.end_word;
  };

  const swapPath = function () {
    if (!playing) return;
    setChallengeData({
      ...challengeData,
      start_word: challengeData.end_word,
      end_word: challengeData.start_word,
    });
    setPath([]);
  };

  // useEffect(() => {
  //   updateWord(challengeData.start_word);
  // }, []);

  useEffect(() => {
    updateWord(challengeData.start_word);
  }, [challengeData]);

  return (
    wordData && (
      <div className="md:container md:mx-auto md:w-5/12">
        <Nav swapPath={swapPath} />
        <Challenge
          start={challengeData.start_word}
          end={challengeData.end_word}
        />
        <CurrentWord
          word={wordData.word}
          definition={wordData.definitions[0]}
        />
        <WordLists
          updateWord={updateWord}
          synonyms={wordData.synonyms}
          antonyms={wordData.antonyms}
        />
        <Path path={path} />
        <GameOverModal path={path} />
      </div>
    )
  );
}
