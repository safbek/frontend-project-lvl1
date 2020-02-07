import readlineSync from 'readline-sync';

const getRandomValue = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

export const ruleBrainPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const brainPrimeGame = () => {
  const number = getRandomValue(1, 100);

  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = `Question: ${number} `;
  const answer = readlineSync.question(question);

  const pair = [];
  pair.push(answer);
  pair.push(correctAnswer);
  return pair;
};

export { brainPrimeGame };
