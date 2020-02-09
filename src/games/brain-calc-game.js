import readlineSync from 'readline-sync';
import runGameEngine from '..';
import getRandomValue from '../generate-data';

export const ruleGame = 'What is the result of the expression?';

const getGameData = () => {
  const operators = [{
    sign: '+',
    method: (a, b) => a + b,
  }, {
    sign: '-',
    method: (a, b) => a - b,
  }, {
    sign: '*',
    method: (a, b) => a * b,
  }];

  const selectedOperator = Math.floor(Math.random() * operators.length);
  const operand = operators[selectedOperator].sign;

  const firstValue = getRandomValue();
  const secondValue = getRandomValue();

  const question = `Question: ${firstValue} ${operand} ${secondValue} `;
  const userAnswer = +readlineSync.question(question);
  const correctAnswer = operators[selectedOperator].method(firstValue, secondValue);

  return [userAnswer, correctAnswer];
};

export default () => runGameEngine(ruleGame, getGameData);
