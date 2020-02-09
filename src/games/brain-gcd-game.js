import readlineSync from 'readline-sync';
import runGameEngine from '..';
import getRandomValue from '../generate-data';

export const ruleGame = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  let firstNumber = getRandomValue();
  let secondNumber = getRandomValue();

  const question = `Question: ${firstNumber} ${secondNumber} `;
  const userAnswer = readlineSync.question(question);

  let correctAnswer;
  let temp;

  while (secondNumber !== 0) {
    temp = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = temp;
    correctAnswer = firstNumber;
  }
  return [userAnswer, correctAnswer];
};

export default () => runGameEngine(ruleGame, getGameData);
