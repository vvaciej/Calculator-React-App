import { useState, useEffect } from 'react';

export function MainCalc() {
	const [inputValue, setInputValue] = useState('');

	const handleBtnFunction = btnValue => {
		switch (btnValue) {
			case 'del':
				setInputValue(prevState => String(prevState).slice(0, -1));
				break;
			case 'reset':
				setInputValue('');
				break;
			case '=':
				evalResults();
				break;
			default:
				setInputValue(prevState => prevState + btnValue);
				break;
		}
	};

	useEffect(() => {
		const handleBtnFunctionOnKeydown = e => {
			switch (e.key) {
				case '0':
					setInputValue(prevState => prevState + '0');
					lightOnKey('0');
					break;
				case '1':
					setInputValue(prevState => prevState + '1');
					lightOnKey('1');
					break;
				case '2':
					setInputValue(prevState => prevState + '2');
					lightOnKey('2');
					break;
				case '3':
					setInputValue(prevState => prevState + '3');
					lightOnKey('3');
					break;
				case '4':
					setInputValue(prevState => prevState + '4');
					lightOnKey('4');
					break;
				case '5':
					setInputValue(prevState => prevState + '5');
					lightOnKey('5');
					break;
				case '6':
					setInputValue(prevState => prevState + '6');
					lightOnKey('6');
					break;
				case '7':
					setInputValue(prevState => prevState + '7');
					lightOnKey('7');
					break;
				case '8':
					setInputValue(prevState => prevState + '8');
					lightOnKey('8');
					break;
				case '9':
					setInputValue(prevState => prevState + '9');
					lightOnKey('9');
					break;
				case 'x':
					setInputValue(prevState => prevState + 'x');
					lightOnKey('x');
					break;
				case '*':
					setInputValue(prevState => prevState + 'x');
					lightOnKey('x');
					break;
				case '/':
					setInputValue(prevState => prevState + '/');
					lightOnKey('/');
					break;
				case '%':
					setInputValue(prevState => prevState + '%');
					lightOnKey('%');
					break;
				case '+':
					setInputValue(prevState => prevState + '+');
					lightOnKey('+');
					break;
				case '.':
					setInputValue(prevState => prevState + '.');
					lightOnKey('.');
					break;
				case '-':
					setInputValue(prevState => prevState + '-');
					lightOnKey('-');
					break;
				case 'Enter':
					evalResults();
					lightOnKey('Enter');
					break;
				case 'Backspace':
					setInputValue(prevState => String(prevState).slice(0, -1));
					lightOnKey('Backspace');
					break;
				case 'c':
					setInputValue('');
					lightOnKey('Reset');
					break;
				default:
					break;
			}
		};

		document.addEventListener('keydown', handleBtnFunctionOnKeydown);

		return () => {
			document.removeEventListener('keydown', handleBtnFunctionOnKeydown);
		};
	});

	const lightOnKey = key => {
		const allBtns = document.querySelectorAll('.calc-btn');

		allBtns.forEach(btn => {
			const btnValue = btn.getAttribute('data-value');

			if (btnValue === key) {
				btn.style.backgroundColor = 'var(--light-mode-key)';
				btn.style.transition = '.2s ease';
			}
			setTimeout(() => {
				btn.style.backgroundColor = '';
				btn.style.transition = '.2s ease';
			}, 200);
		});
	};

	const evalResults = () => {
		try {
			const formatedResult = inputValue.includes('x') ? inputValue.replace(/x/g, '*') : inputValue;

			const result = eval(formatedResult);
			const isMoreDecimals = (String(result).split('.')[1] || '').length > 2;

			if (Number.isFinite(result)) {
				setInputValue(isMoreDecimals ? result.toFixed(2) : result);
			}
		} catch (error) {
			console.error(error);
			setInputValue('');
		}
	};

	useEffect(() => {
		const inputEl = document.querySelector('.display-calc-input');

		inputEl.value = inputValue;
	}, [inputValue]);

	return (
		<>
			<button className='calc-btn greens' data-value='Backspace' onClick={() => handleBtnFunction('del')}>
				←
			</button>
			<button className='calc-btn greens' data-value='Reset' onClick={() => handleBtnFunction('reset')}>
				C
			</button>
			<button className='calc-btn reds' data-value='/' onClick={() => handleBtnFunction('/')}>
				/
			</button>
			<button className='calc-btn reds' data-value='x' onClick={() => handleBtnFunction('x')}>
				x
			</button>
			<button className='calc-btn' data-value='7' onClick={() => handleBtnFunction('7')}>
				7
			</button>
			<button className='calc-btn' data-value='8' onClick={() => handleBtnFunction('8')}>
				8
			</button>
			<button className='calc-btn' data-value='9' onClick={() => handleBtnFunction('9')}>
				9
			</button>
			<button className='calc-btn reds' data-value='-' onClick={() => handleBtnFunction('-')}>
				-
			</button>
			<button className='calc-btn' data-value='4' onClick={() => handleBtnFunction('4')}>
				4
			</button>
			<button className='calc-btn' data-value='5' onClick={() => handleBtnFunction('5')}>
				5
			</button>
			<button className='calc-btn' data-value='6' onClick={() => handleBtnFunction('6')}>
				6
			</button>
			<button className='calc-btn reds' data-value='+' onClick={() => handleBtnFunction('+')}>
				+
			</button>
			<button className='calc-btn' data-value='1' onClick={() => handleBtnFunction('1')}>
				1
			</button>
			<button className='calc-btn' data-value='2' onClick={() => handleBtnFunction('2')}>
				2
			</button>
			<button className='calc-btn' data-value='3' onClick={() => handleBtnFunction('3')}>
				3
			</button>
			<button className='calc-btn reds' data-value='%' onClick={() => handleBtnFunction('%')}>
				%
			</button>
			<button className='calc-btn' data-value='0' onClick={() => handleBtnFunction('0')}>
				0
			</button>
			<button className='calc-btn' data-value='.' onClick={() => handleBtnFunction('.')}>
				.
			</button>
			<button className='calc-btn reds' data-value='Enter' onClick={() => handleBtnFunction('=')}>
				=
			</button>
		</>
	);
}

export function DisplayCalc() {
	return (
		<>
			<input type='text' className='display-calc-input cursor-default' maxLength={11} readOnly />
		</>
	);
}
