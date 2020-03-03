import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const runGameEngine = (task, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(task);

  for (let round = 0; round < numberOfRounds; round += 1) {
    const dataFromGame = getGameData();
    const [question, correctAnswer] = dataFromGame;

    const userAnswer = readlineSync.question(`Question: ${question} `);
    if (userAnswer !== correctAnswer) {
      console.log(`Your answer: ${userAnswer}`);
      console.log(`'${userAnswer}'is wrong answer;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGameEngine;
