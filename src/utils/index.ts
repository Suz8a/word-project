const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const convertMinutesToSeconds = (minutes: number) => {
  return minutes * 60;
};

export const addLetters = (wordLetters: string[]) => {
  var lettersLeft = 24 - wordLetters.length;
  var newLetters: string[] = [];

  for (let i = 0; i < lettersLeft; i++) {
    newLetters.push(getRandomCharacter(wordLetters));
  }
  console.log(newLetters);
  return [...newLetters, ...wordLetters].sort(() => Math.random() - 0.5);
};

export const getRandomCharacter = (filter: string[]): string => {
  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
  return filter.find((character) => randomCharacter === character)
    ? getRandomCharacter(filter)
    : randomCharacter;
};
