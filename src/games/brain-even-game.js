import runGameEngine from '..';
import getRandomValue from '../generate-data';

const isEven = (number) => (number % 2 === 0);

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const parityOfNumber = getRandomValue();

  const question = `Question: ${parityOfNumber} `;
  const correctAnswer = isEven(parityOfNumber) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => runGameEngine(ruleGame, getGameData);
