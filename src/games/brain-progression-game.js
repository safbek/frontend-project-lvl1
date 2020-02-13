import runGameEngine from '..';
import getRandomValue from '../generate-data';

const ruleGame = 'What number is missing in the progression?';

const setArithmeticProgression = () => {
  const initialTerm = getRandomValue();
  const commonDifference = getRandomValue();

  const arithmeticProgression = [initialTerm];
  const arithmeticProgressionLength = 9;
  let nextTerm = initialTerm + commonDifference;
  let i = 0;

  while (i < arithmeticProgressionLength) {
    arithmeticProgression[i] = nextTerm;
    nextTerm += commonDifference;
    i += 1;
  }
  return arithmeticProgression;
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
  const arithmeticProgression = setArithmeticProgression();
  const hiddenRandomElement = getRandomValueFromArray(arithmeticProgression);
  const arithmeticProgressionWithHiddenEl = hideElement(hiddenRandomElement, arithmeticProgression);

  const question = `Question: ${arithmeticProgressionWithHiddenEl} `;
  const correctAnswer = hiddenRandomElement;

  return [question, correctAnswer];
};

export default () => runGameEngine(ruleGame, getGameData);
