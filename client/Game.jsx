"use client";
import React, { useEffect, useState } from "react";

import Nav from "./components/Nav";
import Challenge from "./components/Challenge";
import CurrentWord from "./components/CurrentWord";
import WordLists from "./components/WordLists";
import Path from "./components/Path";
import GameOverModal from "./components/GameOverModal";
import HowToModal from "./components/HowToModal";

// import supabase from "@/supabase/supabase";
import ComingSoonModal from "./components/ComingSoonModal";

// const url = "https://wordlink2.vercel.app";
const url = process.env.NEXT_PUBLIC_APP_URL;
// const url = "http://localhost:3000";

export default function Game({ todaysChallengeData, todaysWordData }) {
  const [challengeData, setChallengeData] = useState(todaysChallengeData);
  const [wordData, setWordData] = useState(todaysWordData);
  const [path, setPath] = useState([]);
  const [playing, setPlaying] = useState(true);

  const updateWord = async function (word) {
    if (!playing) return;
    try {
      const dataRes = await fetch(`${url}/api?word=${word}`);
      const data = await dataRes.json();
      console.log(data);
      setWordData(data);
      setPath([...path, word]);
      if (checkWin(word)) {
        setPlaying(false);
        if (!challengeData.record || path.length < challengeData.record) {
          console.log("Updating DB");
          console.log(challengeData);
          console.log(challengeData.record);
          await setNewRecord(path.length, challengeData.date);
        }
        window.game_over_modal.showModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setNewRecord = async function (record, date) {
    try {
      const res = await fetch(`${url}/db`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newRecord: record, date }),
      });
      return res;
    } catch (error) {
      console.log(error);
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
