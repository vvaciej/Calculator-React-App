import { SwitchTheme } from './components/SwitchTheme';
import { MainCalc } from './components/CalcBtnsContainer';
import CookieConsent from 'react-cookie-consent';
import './style/css/main.css';
import { useRef } from 'react';

export default function App() {
	const inputEl = useRef(null);

	return (
		<>
			<div className='calc-wrapper'>
				<header className='header-calc-theme-display'>
					<SwitchTheme />
					<input 
						className='display-calc-input cursor-default' 
						type='text' 
						maxLength={11} 
						readOnly
						ref={inputEl}
					/>
				</header>
				<main className='main-calc'>
					<MainCalc inputEl={inputEl} />
				</main>
			</div>
			<CookieConsent expires={365}>
				This site uses cookies. See our <a href='#'>privacy policy</a> for more.
			</CookieConsent>
		</>
	);
}