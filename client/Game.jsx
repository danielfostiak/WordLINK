"use client";
import React, { useEffect, useState } from "react";

import Nav from "./components/Nav";
import Challenge from "./components/Challenge";
import CurrentWord from "./components/CurrentWord";
import WordLists from "./components/WordLists";
import Path from "./components/Path";
import GameOverModal from "./components/GameOverModal";
import HowToModal from "./components/HowToModal";

import getWord from "@/api/apiCalls";
// import supabase from "@/supabase/supabase";
import ComingSoonModal from "./components/ComingSoonModal";

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
      if (!challengeData.record || path.length - 1 < challengeData.record) {
        await setNewRecord(path.length - 1, challengeData.date);
      }
      window.game_over_modal.showModal();
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
        <GameOverModal challengeData={challengeData} path={path} />
        <HowToModal />
        <ComingSoonModal />
      </div>
    )
  );
}
