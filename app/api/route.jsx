import { NextResponse } from "next/server";

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

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const word = searchParams.get("word");

  const data = await getWord(word);

  return NextResponse.json(data);
}
