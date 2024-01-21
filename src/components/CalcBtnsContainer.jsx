import { useState, useEffect, useRef } from 'react';
import { buttonData } from '../data/btns';

export function MainCalc({ inputEl }) {
  const allBtns = useRef([]);

	useEffect(() => {
		allBtns.current = Array.from(document.querySelectorAll('.calc-btn'));
	}, []);

	const [inputValue, setInputValue] = useState('');

	const handleBtnFunction = btnValue => {
		switch (btnValue) {
			case 'Backspace':
				setInputValue(prevState => String(prevState).slice(0, -1));
				break;
			case 'Reset':
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
		const isFunctionKey = /^F[1-9]|F1[0-2]$/.test(e.key);

		if (isDigitOrSpecial && !isFunctionKey) {
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

		if (document.activeElement instanceof HTMLButtonElement) {
			document.activeElement.blur();
		}
	};

	const lightOnKey = key => {
		allBtns.current.forEach(btn => {
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
		setInputValue('Error');
		inputEl.current.style.color = 'var(--reds)';

		const clearError = e => {
			const isDigitOrSpecial = /[0-9x\/%+\-.]/.test(e.key);

			if (isDigitOrSpecial) setInputValue(e.key);
			else setInputValue('');

			inputEl.current.style.color = '';
			document.removeEventListener('keydown', clearError);

			allBtns.current.forEach(btn => {
				btn.removeEventListener('click', clearError);
			});
		};

		allBtns.current.forEach(btn => {
			btn.addEventListener('click', clearError);
		});
		document.addEventListener('keydown', clearError);
	};

	useEffect(() => {
		inputEl.current.value = inputValue;
	}, [inputValue]);

	useEffect(() => {
		document.addEventListener('keydown', handleBtnFunctionOnKeydown);

		return () => {
			document.removeEventListener('keydown', handleBtnFunctionOnKeydown);
		};
	});

	return (
		<>
			{buttonData.map((button, index) => (
				<button
					key={index}
					className={button.className}
					data-value={button.dataValue}
					onClick={() => handleBtnFunction(button.dataValue)}>
					{button.content}
				</button>
			))}
		</>
	);
}
