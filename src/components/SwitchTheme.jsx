import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { getCookie } from './GetCookie';
import { useState, useEffect } from 'react';

export const SwitchTheme = () => {
	const htmlEl = document.querySelector('html');
	const [isSwitched, setIsSwitched] = useState('false');
	const isCookiesAccepted = localStorage.getItem('isAccepted');

	const switchTheme = () => {
		const newTheme = !isSwitched;

		htmlEl.classList.toggle('dark', !newTheme);
		htmlEl.classList.toggle('light', newTheme);
		
		setIsSwitched(newTheme);

		if (isCookiesAccepted === 'false') return;	

		document.cookie = `whatTheme=${newTheme};`;
	};

  useEffect(() => {
		if (isCookiesAccepted === 'false') {
			htmlEl.classList.remove('light');
			htmlEl.classList.add('dark');
			return;
		};

		const whatTheme = getCookie('whatTheme');
		const shouldSwitch = whatTheme === 'true';

		htmlEl.classList.toggle('light', shouldSwitch);
		htmlEl.classList.toggle('dark', !shouldSwitch);

		setIsSwitched(shouldSwitch);
	}, [isSwitched]);

	const switchClass = `switch-theme-container ${isSwitched ? 'switched' : ''}`;

	return (
		<div className={switchClass} onClick={switchTheme}>
			<FontAwesomeIcon 
				icon={faMoon} 
				className={`theme-moon-icon ${!isSwitched ? 'active' : ''}`} 
			/>
			<FontAwesomeIcon 
				icon={faSun} 
				className={`theme-sun-icon ${isSwitched ? 'active' : ''}`} 
			/>
		</div>
	);
};
