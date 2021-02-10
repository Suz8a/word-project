import axios from "axios";

const options: any = {
  method: "GET",
  url: "https://random-words-with-pronunciation.p.rapidapi.com/word",
  headers: {
    "x-rapidapi-key": "e036349bb4mshd5ec6288479a060p10b9fejsn1ff476a7babe",
    "x-rapidapi-host": "random-words-with-pronunciation.p.rapidapi.com",
  },
};

type ResponseType = {
  word: string;
  definition: string;
  pronunciation: string;
};

export async function getWord() {
  const response = await axios.request<ResponseType[]>(options);
  console.log(response.data[0]);
  return response.data[0];
}
