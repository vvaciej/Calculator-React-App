import { SwitchTheme } from './components/SwitchTheme';
import { MainCalc } from './components/CalcBtnsContainer';
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
		</>
	);
}