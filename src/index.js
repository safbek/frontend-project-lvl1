import readlineSync from 'readline-sync';

const isEven = (number) => (number % 2 === 0);

const getRandomIntInclusive = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const brainGame = () => {
  const name = greeting();

  for (let i = 0; i < 3; i += 1) {
    const parityOfNumber = getRandomIntInclusive(1, 100);

    const answer = readlineSync.question(`Question: ${parityOfNumber} `);

    if ((isEven(parityOfNumber) && answer === 'yes')
     || (!isEven(parityOfNumber) && answer === 'no')) {
      console.log('Correct!');
    } else if (isEven(parityOfNumber) && (answer !== 'no' || answer !== 'yes')) {
      return `'${answer}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`;
    } else if (!isEven(parityOfNumber) && (answer !== 'yes' || answer !== 'no')) {
      return `'${answer}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};
export default brainGame;
