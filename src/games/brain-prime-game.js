import readlineSync from 'readline-sync';
import runGameEngine from '..';
import getRandomValue from '../generate-data';

export const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getGameData = () => {
  const number = getRandomValue();

  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = `Question: ${number} `;
  const userAnswer = readlineSync.question(question);

  return [userAnswer, correctAnswer];
};

export default () => runGameEngine(ruleGame, getGameData);
