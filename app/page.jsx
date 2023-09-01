import supabase from "../supabase/supabase";

import getWord from "@/api/apiCalls";

import Game from "../client/Game";

export default async function Home() {
  const today = new Date().toISOString().split("T")[0];

  const { data } = await supabase
    .from("challenges")
    .select("*")
    .eq("date", today);

  const todaysChallengeData = data[0];

  const todaysWordData = await getWord(
    todaysChallengeData.start_word,
    process.env.API_KEY
  );

  return (
    <div className="">
      <Game
        todaysChallengeData={todaysChallengeData}
        todaysWordData={todaysWordData}
        apiKey={process.env.API_KEY}
      />
    </div>
  );
}
