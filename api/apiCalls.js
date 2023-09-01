const getWord = async function (word, apiKey) {
  const url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${apiKey}`;
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

export default getWord;
