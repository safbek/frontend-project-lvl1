import runGameEngine from '..';
import getRandomValue from '../utils';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const question = getRandomValue();
  const correctAnswer = (isPrime(question) ? 'yes' : 'no').toString();

  return [question, correctAnswer];
};

export default () => runGameEngine(task, getGameData);
