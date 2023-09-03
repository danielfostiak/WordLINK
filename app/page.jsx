import supabase from "@/supabase/supabase";

// import getWord from "@/api/apiCalls";

import Game from "../client/Game";

// const url = process.env.NEXT_APP_URL;
// const url = "http://localhost:3000";

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

export default async function Page() {
  const today = new Date().toISOString().split("T")[0];

  const { data } = await supabase
    .from("challenges")
    .select("*")
    .eq("date", today);

  const [todaysChallengeData] = data;

  const todaysWordData = await getWord(todaysChallengeData.start_word);

  return (
    <Game
      todaysChallengeData={todaysChallengeData}
      todaysWordData={todaysWordData}
    />
  );
}

export const dynamic = "force-dynamic";
