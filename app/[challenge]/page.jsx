import { notFound } from "next/navigation";

import supabase from "@/supabase/supabase";

// import getWord from "@/api/apiCalls";

import Game from "@/client/Game";

const getWord = async function (word) {
  const url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${process.env.API_KEY}`;
  try {
    const res = await fetch(url);
    const [resData] = await res.json();
    const data = {
      word,
      definitions: resData.shortdef,
      synonyms: [...new Set(resData.meta.syns.flat())].slice(0, 25),
      antonyms: [...new Set(resData.meta.ants.flat())].slice(0, 25),
    };
    return data;
  } catch (error) {
    console.log("Error in API Call");
    console.log(error);
  }
};

function isCurrentDateMoreThan(dateString) {
  // Split the dateString into parts
  const parts = dateString.split("-");

  // Note: JavaScript months are 0-based, so subtract 1 from the month
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);

  // Create a date object from dateString
  const dateToCompare = new Date(year, month, day);

  // Get the current date with time set to 00:00:00 for accurate comparison
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  // Compare the dates
  return currentDate >= dateToCompare;
}

export default async function Page({ params }) {
  const { challenge } = params;

  if (!isCurrentDateMoreThan(challenge)) {
    notFound();
  }

  const { data } = await supabase
    .from("challenges")
    .select("*")
    .eq("date", challenge);

  if (!data?.length) {
    notFound();
  }

  const [challengeData] = data;

  const wordData = await getWord(challengeData.start_word);

  return <Game todaysChallengeData={challengeData} todaysWordData={wordData} />;
}

export const dynamic = "force-dynamic";
