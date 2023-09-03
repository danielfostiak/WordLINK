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

export default async function Page({ params }) {
  const { challenge } = params;

  const { data } = await supabase
    .from("challenges")
    .select("*")
    .eq("date", challenge);

  if (!data) notFound();

  const [challengeData] = data;

  const wordData = await getWord(challengeData.start_word);

  return <Game todaysChallengeData={challengeData} todaysWordData={wordData} />;
}

export const dynamic = "force-dynamic";
