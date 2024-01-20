import { useState, useEffect } from 'react';

export function MainCalc() {
	const allBtns = document.querySelectorAll('.calc-btn');
	const [inputValue, setInputValue] = useState('');

	const handleBtnFunction = btnValue => {
		switch (btnValue) {
			case 'Backspace':
				setInputValue(prevState => String(prevState).slice(0, -1));
				break;
			case 'reset':
				setInputValue('');
				break;
			case 'Enter':
				evalResults();
				break;
			default:
				setInputValue(prevState => prevState + btnValue);
				break;
		}

		lightOnKey(btnValue);
	};

	const handleBtnFunctionOnKeydown = e => {
		const isDigitOrSpecial = /[0-9x\/%+\-.]/.test(e.key);

		if (isDigitOrSpecial) {
			setInputValue(prevState => prevState + e.key);
			lightOnKey(e.key);
		} else {
			switch (e.key) {
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
				case '*':
					setInputValue(prevState => prevState + 'x');
					lightOnKey('x');
					break;
			}
		}
	};

	const lightOnKey = key => {
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
			handleCalcError();
		}
	};

  const handleCalcError = () => {
		const inputEl = document.querySelector('.display-calc-input');
		
		setInputValue('Error');
		inputEl.style.color = 'var(--reds)';
		
		const clearError = (e) => {
			const isDigit = /[0-9x\/%+\-.]/.test(e.key);

			if (isDigit) setInputValue(e.key);
			else setInputValue('');

			inputEl.style.color = '';
			document.removeEventListener('keydown', clearError);
			
			allBtns.forEach(btn => {
				btn.removeEventListener('click', clearError);
			});
		};

		allBtns.forEach(btn => {
			btn.addEventListener('click', clearError);
		})
		document.addEventListener('keydown', clearError);
	};

	useEffect(() => {
		const inputEl = document.querySelector('.display-calc-input');

		inputEl.value = inputValue;
	}, [inputValue]);

	useEffect(() => {
		document.addEventListener('keydown', handleBtnFunctionOnKeydown);

		return () => {
			document.removeEventListener('keydown', handleBtnFunctionOnKeydown);
		}
	})

	return (
		<>
			<button className='calc-btn greens' data-value='Backspace' onClick={() => handleBtnFunction('Backspace')}>
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
			<button className='calc-btn reds' data-value='Enter' onClick={() => handleBtnFunction('Enter')}>
				=
			</button>
		</>
	);
}