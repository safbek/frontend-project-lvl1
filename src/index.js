import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const runGameEngine = (rule, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(rule);

  for (let round = 0; round < numberOfRounds; round += 1) {
    const dataFromGame = getGameData();
    const [question, correctAnswer] = dataFromGame;

    const answer = readlineSync.question(`Question: ${question} `);
    const userAnswer = typeof correctAnswer === 'number' ? +answer : answer;

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`Your answer: ${userAnswer}`);
      console.log(`'${userAnswer}'is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGameEngine;
