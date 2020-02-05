import readlineSync from 'readline-sync';
// import engineGames from '..';

const getRandomValue = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

export const ruleBrainCalcGame = 'What is the result of the expression?';


const brainCalcGame = () => {
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
  const firstValue = getRandomValue(1, 100);
  const secondValue = getRandomValue(1, 100);
  const correctAnswer = operators[selectedOperator].method(firstValue, secondValue);

  const question = `Question: ${firstValue} ${operand} ${secondValue} `;
  const answer = readlineSync.question(question);

  // const message = `Your answer: ${answer} Correct!`;
  // const message2 = `Your answer: ${answer}
  //   '${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
  //   Let's try again, ${name}`;

  const pair = [];
  pair.push(+answer);
  pair.push(correctAnswer);
  return pair;
};

export { brainCalcGame };
