import readlineSync from 'readline-sync';

const runGameEngine = (rule, getGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(rule);

  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const dataFromGame = getGame();
    const [question, correctAnswer] = dataFromGame;

    const answer = readlineSync.question(question);
    const userAnswer = typeof correctAnswer === 'number' ? +answer : answer;

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
