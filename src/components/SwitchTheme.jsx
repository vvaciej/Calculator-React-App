import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { GetCookie } from '../helpers/GetCookie';
import { useState, useEffect } from 'react';

export const SwitchTheme = () => {
	const htmlEl = document.querySelector('html');
	const [isSwitched, setIsSwitched] = useState('false');

	const switchTheme = () => {
		htmlEl.classList.toggle('dark', !isSwitched);
		htmlEl.classList.toggle('light', isSwitched);

		const newTheme = !isSwitched;
		setIsSwitched(newTheme);

		document.cookie = `whatTheme=${newTheme};`;
	};

	useEffect(() => {
		const whatTheme = GetCookie('whatTheme');
		const shouldSwitch = whatTheme === 'true';

		htmlEl.classList.toggle('light', shouldSwitch);
		htmlEl.classList.toggle('dark', !shouldSwitch);

		setIsSwitched(shouldSwitch);
	}, [isSwitched]);

	const switchClass = `switch-theme-container ${isSwitched ? 'switched' : ''}`;

	return (
		<div className={switchClass} onClick={switchTheme}>
			<FontAwesomeIcon icon={faMoon} className={`theme-moon-icon ${!isSwitched ? 'active' : ''}`} />
			<FontAwesomeIcon icon={faSun} className={`theme-sun-icon ${isSwitched ? 'active' : ''}`} />
		</div>
	);
};
