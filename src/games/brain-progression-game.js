import runGameEngine from '..';
import getRandomValue from '../utils';

const ruleGame = 'What number is missing in the progression?';

const progressionLength = 9;
const genProgression = () => {
  const first = getRandomValue();
  const step = getRandomValue();

  const progression = [];
  for (let n = 0; n < progressionLength; n += 1) {
    progression[n] = first + n * step;
  }

  return progression;
};

const hideElement = (elements, element) => {
  const list = elements;
  const item = element;
  list[item] = '..';
  return list.join();
};

const getGameData = () => {
  const progression = genProgression();
  const firstIndex = 0;
  const lastIndex = progression.length - 1;
  const randomElementIndex = getRandomValue(firstIndex, lastIndex);

  const hiddenElement = progression[randomElementIndex];
  const progressionWithHiddenEl = hideElement(progression, randomElementIndex);

  const question = progressionWithHiddenEl;
  const correctAnswer = hiddenElement.toString();

  return [question, correctAnswer];
};

export default () => runGameEngine(ruleGame, getGameData);
