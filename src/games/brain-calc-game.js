import runGameEngine from '..';
import getRandomValue from '../utils';

const ruleGame = 'What is the result of the expression?';

const calculator = [{
  operator: '+',
  calculate: (a, b) => a + b,
}, {
  operator: '-',
  calculate: (a, b) => a - b,
}, {
  operator: '*',
  calculate: (a, b) => a * b,
}];

const getGameData = () => {
  const firstIndex = 0;
  const lastIndex = calculator.length - 1;
  const index = getRandomValue(firstIndex, lastIndex);
  const { operator } = calculator[index];
  const { calculate } = calculator[index];

  const firstValue = getRandomValue();
  const secondValue = getRandomValue();

  const question = `${firstValue} ${operator} ${secondValue}`;
  const correctAnswer = calculate(firstValue, secondValue).toString();

  return [question, correctAnswer];
};

export default () => runGameEngine(ruleGame, getGameData);
