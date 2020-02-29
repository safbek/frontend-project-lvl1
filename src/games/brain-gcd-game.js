import runGameEngine from '..';
import getRandomValue from '../utils';

const task = 'Find the greatest common divisor of given numbers.';

const getGcdOfTwoNumber = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGcdOfTwoNumber(number2, number1 % number2);
};

const getGameData = () => {
  const firstNumber = getRandomValue();
  const secondNumber = getRandomValue();

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGcdOfTwoNumber(firstNumber, secondNumber).toString();

  return [question, correctAnswer];
};

export default () => runGameEngine(task, getGameData);
