import readlineSync from 'readline-sync';
import runGameEngine from '..';
import getRandomValue from '../generate-data';

const isEven = (number) => (number % 2 === 0);

export const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const parityOfNumber = getRandomValue();
  const userAnswer = readlineSync.question(`Question: ${parityOfNumber} `);
  const correctAnswer = isEven(parityOfNumber) ? 'yes' : 'no';

  return [userAnswer, correctAnswer];
};

export default () => runGameEngine(ruleGame, getGameData);
