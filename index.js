import chalk from 'chalk';
import pad from 'pad-component';
import wrapAnsi from 'wrap-ansi';
import stringWidth from 'string-width';
import stripAnsi from 'strip-ansi';
import ansiStyles from 'ansi-styles';
import ansiRegex from 'ansi-regex';
import cliBoxes from 'cli-boxes';

const _border = cliBoxes.round;
const _leftOffset = 17;

const _defaultGreeting
	= '\n     _-----_     '
	+ '\n    |       |    '
	+ '\n    |' + chalk.red('--(c)--') + '|    '
	+ '\n   `----o----´   '
	+ '\n    ' + chalk.yellow('(') + ' _' + chalk.yellow('´h`') + '_ ' + chalk.yellow(')') + '    '
	+ '\n    /___e___\\   /'
	+ '\n     ' + chalk.yellow('|  r  |') + '     '
	+ '\n   __' + chalk.yellow('\'._e_.\'') + '__   '
	+ '\n ´   ' + chalk.red('`  n') + 't ' + chalk.red('´ |') + ' ` ';

export default function c_yosay(message, options = {}) {
	message = (message ?? 'Welcome to Coherent, ladies and gentlemen!').trim();

	const _styledIndexes = {};
	let _maxLength = 24;
	let _topOffset = 4;
	let _completedString = '';

	const CHARACTER_WIDTH = 17;

	const TOP_FRAME_WIDTH = 28;

	const MAX_MESSAGE_LINES_BEFORE_OVERFLOW = 7;

	let TOTAL_CHARACTERS_PER_LINE = CHARACTER_WIDTH + TOP_FRAME_WIDTH;

	if (options._maxLength) {
		_maxLength = stripAnsi(message).toLowerCase().split(' ').sort()[0].length;

		if (_maxLength < options._maxLength) {
			_maxLength = options._maxLength;
			TOTAL_CHARACTERS_PER_LINE = _maxLength + CHARACTER_WIDTH + _topOffset;
		}
	}

	const regexNewline = new RegExp(`\\s{${_maxLength}}`);
	const _borderHorizontal = _border.top.repeat(_maxLength + 2);

	const frame = {
		top: _border.topLeft + _borderHorizontal + _border.topRight,
		side: ansiStyles.reset.open + _border.left + ansiStyles.reset.open,
		bottom: ansiStyles.reset.open + _border.bottomLeft + _borderHorizontal + _border.bottomRight,
	};

	message.replace(ansiRegex(), (match, offset) => {
		for (const value of Object.values(_styledIndexes)) {
			offset -= value.length;
		}

		_styledIndexes[offset] = _styledIndexes[offset] ? _styledIndexes[offset] + match : match;
	});

	const strippedMessage = stripAnsi(message);
	const spacesIndex = [];

	strippedMessage.split(' ').reduce((accumulator, currentValue) => {
		spacesIndex.push(accumulator + currentValue.length);
		return spacesIndex.at(-1) + 1;
	}, 0);

	return wrapAnsi(strippedMessage, _maxLength, {hard: true})
		.split(/\n/)
		.reduce((greeting, string_, index, array) => {
			if (!regexNewline.test(string_)) {
				string_ = string_.trim();
			}

			_completedString += string_;

			let offset = 0;

			for (const element of spacesIndex) {
				const character = _completedString[element - offset];
				if (character) {
					if (character !== ' ') {
						offset += 1;
					}
				} else {
					break;
				}
			}

			string_ = _completedString
				.slice(_completedString.length - string_.length)
				.replaceAll(/./g, (character, characterIndex) => {
					characterIndex += _completedString.length - string_.length + offset;

					let hasContinuedStyle = 0;
					let continuedStyle;

					for (const offset of Object.keys(_styledIndexes)) {
						if (characterIndex > offset) {
							hasContinuedStyle++;
							continuedStyle = _styledIndexes[offset];
						}

						if (hasContinuedStyle === 1 && characterIndex < offset) {
							hasContinuedStyle++;
						}
					}

					if (_styledIndexes[characterIndex]) {
						return _styledIndexes[characterIndex] + character;
					}

					if (hasContinuedStyle >= 2) {
						return continuedStyle + character;
					}

					return character;
				})
				.trim();

			const paddedString = pad({
				length: stringWidth(string_),
				valueOf() {
					return ansiStyles.reset.open + string_ + ansiStyles.reset.open;
				},
			}, _maxLength);

			if (index === 0) {
				if (array.length === 2) {
					_topOffset -= 1;
				}

				if (array.length >= 3) {
					_topOffset -= 2;
				}

				if (array.length > MAX_MESSAGE_LINES_BEFORE_OVERFLOW) {
					const emptyLines = Math.ceil((array.length - MAX_MESSAGE_LINES_BEFORE_OVERFLOW) / 2);

					for (let i = 0; i < emptyLines; i++) {
						greeting.unshift('');
					}

					frame.top = pad.left(frame.top, TOTAL_CHARACTERS_PER_LINE);
				}

				greeting[_topOffset - 1] += frame.top;
			}

			greeting[index + _topOffset]
				= (greeting[index + _topOffset] || pad.left('', _leftOffset))
				+ frame.side + ' ' + paddedString + ' ' + frame.side;

			if (array.length === index + 1) {
				greeting[index + _topOffset + 1]
					= (greeting[index + _topOffset + 1] || pad.left('', _leftOffset))
					+ frame.bottom;
			}

			return greeting;
		}, _defaultGreeting.split(/\n/))
		.join('\n') + '\n';
}
