import readlineSync from 'readline-sync';
import { brainEvenGame } from './games/brain-even-game';
import { brainCalcGame, rule } from './games/brain-calc-game';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const userName = `Hello, ${name}`;
  console.log(userName);
  return name;
};


const engineGames = (arg, func2) => {
  const name = greeting();
  console.log(arg);
  for (let i = 0; i < 3; i += 1) {
    const data = func2();
    const answerUser = data[0];
    const correctAnswer = data[1];
    if (answerUser === correctAnswer) {
      console.log('Correct!');
    } else if (answerUser !== correctAnswer) {
      console.log(`Your answer: ${answerUser}`);
      return `'${answerUser}'is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};

export {
  brainEvenGame, brainCalcGame, engineGames, rule,
};
