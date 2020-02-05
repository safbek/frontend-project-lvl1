import readlineSync from 'readline-sync';

const getRandomValue = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

export const ruleBrainGcdGame = 'Find the greatest common divisor of given numbers.';

const brainGcdGame = () => {
  let firstNumber = getRandomValue(1, 100);
  let secondNumber = getRandomValue(1, 100);

  const question = `Question: ${firstNumber} ${secondNumber} `;
  const answer = readlineSync.question(question);

  let correctAnswer = 0;
  let temp = 0;

  while (secondNumber !== 0) {
    temp = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = temp;
    correctAnswer = firstNumber;
  }
  const pair = [];
  pair.push(+answer);
  pair.push(correctAnswer);
  return pair;
};

export { brainGcdGame };
