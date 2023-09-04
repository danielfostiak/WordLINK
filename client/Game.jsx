"use client";
import React, { useEffect, useState } from "react";

import Nav from "./components/Nav";
import Challenge from "./components/Challenge";
import CurrentWord from "./components/CurrentWord";
import WordLists from "./components/WordLists";
import Path from "./components/Path";
import GameOverModal from "./components/GameOverModal";
import HowToModal from "./components/HowToModal";
import CalendarComp from "./components/CalendarComp";

import ComingSoonModal from "./components/ComingSoonModal";

const url = process.env.NEXT_PUBLIC_APP_URL;
// const url = "http://localhost:3000";

export default function Game({ todaysChallengeData, todaysWordData }) {
  const [challengeData, setChallengeData] = useState(todaysChallengeData);
  const [wordData, setWordData] = useState(todaysWordData);
  const [path, setPath] = useState([todaysChallengeData.start_word]);
  const [playing, setPlaying] = useState(true);
  const [leaderboard, setLeaderboard] = useState([]);

  const updateWord = async function (word) {
    if (!playing) return;
    try {
      const dataRes = await fetch(`${url}/api?word=${word}`);
      const data = await dataRes.json();
      setWordData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const setInitialPath = function (word) {
    setPath([word]);
  };

  const addWord = async function (word) {
    if (!playing) return;
    if (path.length > 50) {
      alert("Path way too long, give up...");
      return;
    }
    try {
      await updateWord(word);
      setPath([...path, word]);
      if (checkWin(word)) {
        setPlaying(false);
        const now = new Date();
        await setScore(challengeData.date, path.length, [...path, word], now);
        const scores = await getScores(challengeData.date);
        setLeaderboard(scores);
        window.game_over_modal.showModal();
        // const scores = await getScores(challengeData.date);
        // if (!challengeData.record || path.length < challengeData.record) {
        //   console.log("Updating DB");
        //   console.log(challengeData);
        //   console.log(challengeData.record);
        //   await setNewRecord(path.length, challengeData.date);
        // }
        // window.game_over_modal.showModal();
        // await setScore(challengeData.date, path.length);
        // const scores = await getScores(challengeData.date);
        // console.log(scores);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setScore = async function (date, pathlength, path, createdAt) {
    try {
      console.log(JSON.stringify({ date, pathlength }));
      const res = await fetch(`${url}/db/setScore`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date, pathlength, path, createdAt }),
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const getScores = async function (date) {
    try {
      const res = await fetch(`${url}/db/getScores?date=${date}`);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  // const setNewRecord = async function (record, date) {
  //   try {
  //     const res = await fetch(`${url}/db`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ newRecord: record, date }),
  //     });
  //     return res;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const checkWin = function (word) {
    return word == challengeData.end_word;
  };

  const swapPath = async function () {
    if (!playing) return;
    setChallengeData({
      ...challengeData,
      start_word: challengeData.end_word,
      end_word: challengeData.start_word,
    });
  };

  const travelPath = async function (word, i) {
    if (!playing) return;
    await updateWord(word);
    setPath([...path.slice(0, i + 1)]);
  };

  useEffect(() => {
    updateWord(challengeData.start_word);
    setInitialPath(challengeData.start_word);
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
          addWord={addWord}
          synonyms={wordData.synonyms}
          antonyms={wordData.antonyms}
        />
        <Path path={path} travelPath={travelPath} />
        <CalendarComp />
        <GameOverModal
          challengeData={challengeData}
          path={path}
          scores={leaderboard}
        />
        <HowToModal />
        <ComingSoonModal />
      </div>
    )
  );
}
