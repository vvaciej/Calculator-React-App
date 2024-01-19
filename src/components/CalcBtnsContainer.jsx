import { useState, useEffect } from 'react';

export function MainCalc() {
	const [inputValue, setInputValue] = useState('');

	const handleBtnFunction = btnValue => {
		switch (btnValue) {
			case 'del':
				setInputValue(prevState => prevState.slice(0, -1));
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
					break;
				case '1':
					setInputValue(prevState => prevState + '1');
					break;
				case '2':
					setInputValue(prevState => prevState + '2');
					break;
				case '3':
					setInputValue(prevState => prevState + '3');
					break;
				case '4':
					setInputValue(prevState => prevState + '4');
					break;
				case '5':
					setInputValue(prevState => prevState + '5');
					break;
				case '6':
					setInputValue(prevState => prevState + '6');
					break;
				case '7':
					setInputValue(prevState => prevState + '7');
					break;
				case '8':
					setInputValue(prevState => prevState + '8');
					break;
				case '9':
					setInputValue(prevState => prevState + '9');
					break;
				case '*':
					setInputValue(prevState => prevState + '*');
					break;
				case '/':
					setInputValue(prevState => prevState + '/');
					break;
				case '%':
					setInputValue(prevState => prevState + '%');
					break;
				case '+':
					setInputValue(prevState => prevState + '+');
					break;
				case '.':
					setInputValue(prevState => prevState + '.');
					break;
				case '-':
					setInputValue(prevState => prevState + '-');
					break;
				case 'Enter':
					evalResults();
					break;
				case 'Backspace':
					setInputValue(prevState => prevState.slice(0, -1));
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

	const evalResults = () => {
		try {
			// const decimalPart = inputValue.split('.')[1];
			const result = eval(inputValue);

			if (Number.isFinite(result)) {
				setInputValue(prevState => eval(prevState).toFixed(2));
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
			<button className='calc-btn greens' onClick={() => handleBtnFunction('del')}>
				←
			</button>
			<button className='calc-btn greens' onClick={() => handleBtnFunction('reset')}>
				C
			</button>
			<button className='calc-btn reds' onClick={() => handleBtnFunction('/')}>
				/
			</button>
			<button className='calc-btn reds' onClick={() => handleBtnFunction('*')}>
				*
			</button>
			<button className='calc-btn' onClick={() => handleBtnFunction('7')}>
				7
			</button>
			<button className='calc-btn' onClick={() => handleBtnFunction('8')}>
				8
			</button>
			<button className='calc-btn' onClick={() => handleBtnFunction('9')}>
				9
			</button>
			<button className='calc-btn reds' onClick={() => handleBtnFunction('-')}>
				-
			</button>
			<button className='calc-btn' onClick={() => handleBtnFunction('4')}>
				4
			</button>
			<button className='calc-btn' onClick={() => handleBtnFunction('5')}>
				5
			</button>
			<button className='calc-btn' onClick={() => handleBtnFunction('6')}>
				6
			</button>
			<button className='calc-btn reds' onClick={() => handleBtnFunction('+')}>
				+
			</button>
			<button className='calc-btn' onClick={() => handleBtnFunction('1')}>
				1
			</button>
			<button className='calc-btn' onClick={() => handleBtnFunction('2')}>
				2
			</button>
			<button className='calc-btn' onClick={() => handleBtnFunction('3')}>
				3
			</button>
			<button className='calc-btn reds' onClick={() => handleBtnFunction('%')}>
				%
			</button>
			<button className='calc-btn' data-value='0' onClick={() => handleBtnFunction('0')}>
				0
			</button>
			<button className='calc-btn' onClick={() => handleBtnFunction('.')}>
				.
			</button>
			<button className='calc-btn reds' onClick={() => handleBtnFunction('=')}>
				=
			</button>
		</>
	);
}

export function DisplayCalc() {
	return (
		<>
			<input
				type='text'
				className='display-calc-input cursor-default'
				maxLength={11}
				readOnly
			/>
		</>
	);
}
