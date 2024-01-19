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

	const evalResults = () => {
		try {
			// const decimalPart = inputValue.split('.')[1];
			const result = eval(inputValue);

			if (Number.isFinite(result)) {
				setInputValue(prevState => eval(prevState).toFixed(2))
			}

		} catch (error) {
			console.error(error);
			setInputValue('');
		}
	};

	useEffect(() => {
		const inputEl = document.querySelector('.display-calc-input');

		inputEl.value = inputValue;
	});

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
			<button className='calc-btn' data-value="0" onClick={() => handleBtnFunction('0')}>
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
				// onKeyDown={e => {
				//   const allowedKeys = ['Backspace', '0', '1', '2',
				//     '3', '4', '5', '6', '7', '8', '9', 'ArrowLeft', 'ArrowRight',
				//     '*', '/', '.', '-', '+', '='
				//   ];

				//   !allowedKeys.includes(e.key) ? e.preventDefault() : '';
				// }}
			/>
		</>
	);
}
