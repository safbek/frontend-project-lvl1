import readlineSync from 'readline-sync';

const isEven = (number) => (number % 2 === 0);

const getRandomValue = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

export const ruleBrainEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEvenGame = () => {
  const parityOfNumber = getRandomValue(1, 100);
  const answer = readlineSync.question(`Question: ${parityOfNumber} `);
  const correctAnswer = isEven(parityOfNumber) ? 'yes' : 'no';

  const data = [];
  data.push(answer);
  data.push(correctAnswer);
  return data;
};

export { brainEvenGame };
