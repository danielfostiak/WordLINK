import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://iftkcgugxbeupommrldg.supabase.co",
  process.env.SUPABASE_KEY
);

export const setNewRecord = async function (newRecord, date) {
  const { data, error } = await supabase
    .from("challenges")
    .update({ record: newRecord })
    .eq("date", date)
    .select();
  return data;
};

export default supabase;
