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

export function MainCalc() {
	return (
		<>
			<section className='calc-btns-section-x'>
				<button className='calc-btn special' data-value='del'>
					←
				</button>
				<button className='calc-btn special' data-value='reset'>
					C
				</button>
				<button className='calc-btn special' data-value='/'>
					/
				</button>
				<button className='calc-btn special' data-value='*'>
					x
				</button>
			</section>
			<section className='calc-btns-section-x'>
				<button className='calc-btn' data-value='7'>
					7
				</button>
				<button className='calc-btn' data-value='8'>
					8
				</button>
				<button className='calc-btn' data-value='9'>
					9
				</button>
				<button className='calc-btn special' data-value='-'>
					-
				</button>
			</section>
			<section className='calc-btns-section-x'>
				<button className='calc-btn' data-value='4'>
					4
				</button>
				<button className='calc-btn' data-value='5'>
					5
				</button>
				<button className='calc-btn' data-value='6'>
					6
				</button>
				<button className='calc-btn special' data-value='+'>
					+
				</button>
			</section>
			<section className='calc-btns-section-x'>
				<button className='calc-btn' data-value='1'>
					1
				</button>
				<button className='calc-btn' data-value='2'>
					2
				</button>
				<button className='calc-btn' data-value='3'>
					3
				</button>
				<button className='calc-btn special' data-value='='>
					=
				</button>
			</section>
			<section className='calc-btns-section-x'>
				<button className='calc-btn' data-value='0'>
					0
				</button>
				<button className='calc-btn' data-value='.'>
					.
				</button>
				<button className='calc-btn'></button>
			</section>
		</>
	);
}
