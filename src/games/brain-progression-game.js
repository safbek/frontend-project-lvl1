import runGameEngine from '..';
import getRandomValue from '../utils';

const task = 'What number is missing in the progression?';

const progressionLength = 9;
const genProgression = () => {
  const first = getRandomValue();
  const step = getRandomValue();

  const progression = [];
  for (let index = 0; index < progressionLength; index += 1) {
    progression[index] = first + index * step;
  }
  return progression;
};

const getGameData = () => {
  const progression = genProgression();
  const firstIndex = 0;
  const lastIndex = progression.length - 1;
  const hiddenElementIndex = getRandomValue(firstIndex, lastIndex);

  const correctAnswer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const question = progression.join();

  return [question, correctAnswer];
};

export default () => runGameEngine(task, getGameData);
