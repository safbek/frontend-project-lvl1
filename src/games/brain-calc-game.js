import runGameEngine from '..';
import getRandomValue from '../generate-data';

const ruleGame = 'What is the result of the expression?';

const operators = [{
  operator: '+',
  method: (a, b) => a + b,
}, {
  operator: '-',
  method: (a, b) => a - b,
}, {
  operator: '*',
  method: (a, b) => a * b,
}];

const getGameData = () => {
  const firstIndex = 0;
  const lastIndex = operators.length - 1;
  const selectedOperator = getRandomValue(firstIndex, lastIndex);
  const { operator } = operators[selectedOperator];

  const firstValue = getRandomValue();
  const secondValue = getRandomValue();

  const question = `Question: ${firstValue} ${operator} ${secondValue} `;
  const correctAnswer = operators[selectedOperator].method(firstValue, secondValue);

  return [question, correctAnswer];
};

export default () => runGameEngine(ruleGame, getGameData);
