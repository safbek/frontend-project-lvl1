import runGameEngine from '..';
import getRandomValue from '../utils';

const ruleGame = 'What number is missing in the progression?';

const progressionLength = 9;
const setProgression = () => {
  const first = getRandomValue();
  const step = getRandomValue();

  const progression = [];
  let n = 0;
  while (n < progressionLength) {
    progression[n] = first + n * step;
    n += 1;
  }
  return progression;
};


const getRandomValueFromArray = (arr) => {
  const firstIndex = 0;
  const lastIndex = arr.length - 1;
  const index = getRandomValue(firstIndex, lastIndex);

  const randomElement = arr[index];
  return randomElement;
};

const hideElement = (element, elements) => {
  const array = elements;
  const hiddenEl = elements.indexOf(element);
  array[hiddenEl] = '..';
  return array.join();
};

const getGameData = () => {
  const progression = setProgression();
  const hiddenRandomElement = getRandomValueFromArray(progression);
  const progressionWithHiddenEl = hideElement(hiddenRandomElement, progression);

  const question = `${progressionWithHiddenEl}`;
  const correctAnswer = hiddenRandomElement;

  return [question, correctAnswer];
};

export default () => runGameEngine(ruleGame, getGameData);
