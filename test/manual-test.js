import chalk from 'chalk';
import c_yosay from '../index.js';


console.log(c_yosay('Hello, and welcome to my fantastic generator full of whimsy and bubble gum!'));

console.log(c_yosay('Hi'));

console.log(c_yosay('Welcome to Yeoman, ladies and gentlemen!'));

console.log(c_yosay('Hi', {maxLength: 8}));

console.log(c_yosay('Hello, buddy!', {maxLength: 0}));

console.log(c_yosay(chalk.red.bgWhite('Hi')));

console.log(c_yosay(chalk.red.bgWhite('Hi') + ' there, sir!'));

console.log(c_yosay(chalk.red.bgWhite('Hi') + ' there, sir! ' + chalk.bgBlue.white('you are looking') + ' swell today!'));

console.log(c_yosay('first line\nsecond line\n\nfourth line'));

console.log(c_yosay('项目可以更新了'));

console.log(c_yosay('iloveunicornsiloveunicornsiloveunicornsiloveunicornsiloveunicornsiloveunicorns'));

console.log(c_yosay('Lie on your belly and purr when you are asleep shove bum in owner’s face like camera lens. Cough furball.', {maxLength: 11}));
console.log(c_yosay('Lie on your belly and purr when you are asleep shove bum in owner’s face like camera lens. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball.'));
console.log(c_yosay('Lie on your belly and purr when you are asleep shove bum in owner’s face like camera lens. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball.', {maxLength: 11}));
console.log(c_yosay('Lie on your belly and purr when you are asleep shove bum in owner’s face like camera lens. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball. Cough furball.', {maxLength: 26}));

console.log(c_yosay(
	'That’s it. Feel free to fire up the server with '
  + chalk.green('`npm run start:dev`')
  + 'or use our subgenerator to create endpoints.',
));

console.log(c_yosay('That’s it. Feel free to fire up the server with `npm run start:dev` or use our subgenerator to create endpoints.'));

console.log(c_yosay(
	'That’s it. Feel free to fire up the server with '
  + chalk.green('`npm run start:dev`') + '.',
));

console.log(c_yosay(
	'That’s it. Feel free to fire up the server with '
  + '`npm run start:dev`.',
));

console.log(c_yosay(
	`Welcome to the polished ${chalk.red('something iloveunicornsiloveunicornsiloveunicornsiloveunicornsiloveunicornsiloveunicorns')} generator!`,
));

console.log(c_yosay(
	`Welcome to the polished ${chalk.red('something iloveunicornsiloveunicornsiloveunicornsiloveunicornsiloveunicornsiloveunicorns')} generator! Another long sentence ${chalk.yellow('something iloveunicornsiloveunicornsiloveunicornsiloveunicornsiloveunicornsiloveunicorns')}normal text`,
));
