import meow from 'meow';
import c_yosay from './index.js';

const cli = meow(`
	Usage
	  $ c_yosay <string>
	  $ c_yosay <string> --maxLength 8
	  $ echo <string> | c_yosay

	Example
	  $ c_yosay 'Hi man, how are you?'
	  ${c_yosay('Hi man, how are you?')}
`, {
	importMeta: import.meta,
});

console.log(c_yosay(cli.input[0], cli.flags));
