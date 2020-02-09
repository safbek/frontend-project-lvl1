import readlineSync from 'readline-sync';

// const getUserName = () => readlineSync.question('May I have your name? ');

const runGameEngine = (rule, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(rule);

  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const dataFromGame = game();
    const [userAnswer, correctAnswer] = dataFromGame;

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else if (userAnswer !== correctAnswer) {
      console.log(`Your answer: ${userAnswer}`);
      console.log(`'${userAnswer}'is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGameEngine;
