import runGameEngine from '..';
import getRandomValue from '../utils';

const isEven = (number) => (number % 2 === 0);

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const question = getRandomValue();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question.toString(), correctAnswer];
};

export default () => runGameEngine(task, getGameData);
