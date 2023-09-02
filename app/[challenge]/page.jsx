import { notFound } from "next/navigation";

import supabase from "@/supabase/supabase";

import getWord from "@/api/apiCalls";

import Game from "@/client/Game";

export default async function Page({ params }) {
  const { challenge } = params;

  const { data } = await supabase
    .from("challenges")
    .select("*")
    .eq("date", challenge);

  if (!data) notFound();

  const [challengeData] = data;

  const wordData = await getWord(challengeData.start_word, process.env.API_KEY);

  return <Game todaysChallengeData={challengeData} todaysWordData={wordData} />;
}
