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
    newLetters.push(getRandomItem(wordLetters, alphabet).randomItem);
  }
  console.log(newLetters);
  return shuffle([...newLetters, ...wordLetters]).map((letter) => ({
    value: letter,
    color: "white",
    disabled: false,
  }));
};

//gets a random item from an array which is not contained in filter
export const getRandomItem = (
  filter: string[],
  array: string[]
): { randomItem: string; randomIndex: number } => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomItem = array[randomIndex];

  return filter.find((character) => randomItem === character)
    ? getRandomItem(filter, array)
    : { randomItem, randomIndex };
};

export const getClueIndex = (
  letters: { value: string; disabled: boolean; color: string }[],
  wordLetters: string[]
): number => {
  return getRandomItem(
    wordLetters,
    letters.map((letter) => letter.value)
  ).randomIndex;
};

export const shuffle = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};
