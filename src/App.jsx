import { SwitchTheme } from './components/SwitchTheme';
import { MainCalc } from './components/CalcBtnsContainer';
import CookieConsent from 'react-cookie-consent';
import './style/css/main.css';

export default function App() {
	return (
		<>
			<div className='calc-wrapper'>
				<header className='header-calc-theme-display'>
					<SwitchTheme />
					<input type='text' className='display-calc-input cursor-default' maxLength={11} readOnly />
				</header>
				<main className='main-calc'>
					<MainCalc />
				</main>
			</div>
			<CookieConsent expires={365}>
				This site uses cookies. See our <a href='#'>privacy policy</a> for more.
			</CookieConsent>
		</>
	);
}