import supabase from "@/supabase/supabase";

import getWord from "@/api/apiCalls";

import Game from "../client/Game";

// const url = process.env.NEXT_APP_URL;
// const url = "http://localhost:3000";

export default async function Page() {
  const today = new Date().toISOString().split("T")[0];

  const { data } = await supabase
    .from("challenges")
    .select("*")
    .eq("date", today);

  const [todaysChallengeData] = data;

  const todaysWordData = await getWord(
    todaysChallengeData.start_word,
    process.env.API_KEY
  );

  return (
    <Game
      todaysChallengeData={todaysChallengeData}
      todaysWordData={todaysWordData}
    />
  );
}

export const dynamic = "force-dynamic";
