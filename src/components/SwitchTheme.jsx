import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const SwitchTheme = () => {
	const htmlEl = document.querySelector('html');
	const [isSwitched, setIsSwitched] = useState(false);

	const switchTheme = () => {
		htmlEl.classList.toggle('light');
		htmlEl.classList.toggle('dark');

		setIsSwitched(prevState => !prevState);
	};

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
