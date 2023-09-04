import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://iftkcgugxbeupommrldg.supabase.co",
  process.env.SUPABASE_KEY
);

export const setScore = async function (date, path) {
  const { data } = await supabase
    .from("scores")
    .insert([{ date, path }])
    .select();

  return data;
};

export const getScores = async function (date) {
  const { data } = await supabase
    .from("scores")
    .select("path")
    .eq("date", date);

  return data;
};

export const setNewRecord = async function (newRecord, date) {
  console.log("updating db");
  console.log(newRecord, date);
  const { data, error } = await supabase
    .from("challenges")
    .update({ record: newRecord })
    .eq("date", date)
    .select();
  return data;
};

export default supabase;
