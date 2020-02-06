import readlineSync from 'readline-sync';

const getRandomValue = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

export const ruleBrainProgressionGame = 'What number is missing in the progression?';

const createArithmeticProgression = () => {
  const initialTerm = getRandomValue(1, 100);
  const commonDifference = getRandomValue(1, 100);

  const arithmeticProgression = [initialTerm];
  const arithmeticProgressionLength = 9;
  let nextTerm = initialTerm + commonDifference;
  let i = 0;

  while (i < arithmeticProgressionLength) {
    arithmeticProgression[i] = nextTerm;
    nextTerm += commonDifference;
    i += 1;
  }
  return arithmeticProgression;
};

const getRandomValueFromArray = (arr) => {
  const randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
};

const hiddenElementInArr = (element, arr) => {
  const newArr = arr;
  const el = arr.indexOf(element);
  newArr[el] = '..';
  return arr.join();
};

const brainProgressionGame = () => {
  const arithmeticProgressionArr = createArithmeticProgression();
  const hiddenRandomElement = getRandomValueFromArray(arithmeticProgressionArr);
  const arithmeticProgression = hiddenElementInArr(hiddenRandomElement, arithmeticProgressionArr);

  const correctAnswer = hiddenRandomElement;
  const question = `Question: ${arithmeticProgression} `;
  const answer = readlineSync.question(question);

  const pair = [];
  pair.push(+answer);
  pair.push(correctAnswer);
  return pair;
};

export { brainProgressionGame };
