import runGameEngine from '..';
import getRandomValue from '../generate-data';

const ruleGame = 'Find the greatest common divisor of given numbers.';

const getGcdOfTwoNumber = (number1, number2) => {
  let firstNumber = number1;
  let secondNumber = number2;
  let result;
  let temp;

  while (secondNumber !== 0) {
    temp = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = temp;
    result = firstNumber;
  }
  return result;
};

const getGameData = () => {
  const firstNumber = getRandomValue();
  const secondNumber = getRandomValue();

  const question = `Question: ${firstNumber} ${secondNumber} `;
  const correctAnswer = getGcdOfTwoNumber(firstNumber, secondNumber);

  return [question, correctAnswer];
};

export default () => runGameEngine(ruleGame, getGameData);
