import { SwitchTheme } from './components/SwitchTheme';
import { MainCalc, DisplayCalc } from './components/CalcBtnsContainer';
import './style/css/main.css';

export default function App() {
	return (
		<>
			<div className='calc-wrapper'>
				<header className='header-calc-theme-display'>
					<SwitchTheme />
					<DisplayCalc />
				</header>
				<main className='main-calc'>
					<MainCalc />
				</main>
			</div>
		</>
	)
}