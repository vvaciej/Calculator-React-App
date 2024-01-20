import { useState } from 'react';

export const getCookie = name => {
	const decoded = decodeURIComponent(document.cookie);
	const splited = decoded.split('; ');
	let result = null;

	splited.forEach(e => {
		const [cookieName, cookieValue] = e.split('=');
		if (cookieName === name) result = cookieValue;
	});

	return result;
};

export function clearAllCookies() {
	const cookies = document.cookie.split(';');

	cookies.forEach(cookie => {
		const cookieName = cookie.split('=')[0].trim();
		document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
	});
}

export function GetCookie() {
	const [isAccepted, setIsAccepted] = useState(localStorage.getItem('isAccepted') === 'true');

	const handleAcceptAll = () => {
		localStorage.setItem('isAccepted', 'true');
		setIsAccepted(true);
	};

	const handleDeclineAll = () => {
    const cookiesDiv = document.querySelector('.cookies-div');
		cookiesDiv.classList.remove('active');
    clearAllCookies();
    localStorage.removeItem('isAccepted');
    setIsAccepted(false);
	};

	const handleClearAllCookies = () => {
		clearAllCookies();
		localStorage.removeItem('isAccepted');
		setIsAccepted(false);
	};

	return (
		<>
			<div className={`cookies-div ${!isAccepted ? 'active' : ''}`}>
				<h1>cookies</h1>
				<span>
					This page uses cookies. <a href='#'>Read more</a>
				</span>
				<section>
					<button onClick={handleAcceptAll}>Accept All</button>
					<button onClick={handleDeclineAll}>Decline All</button>
				</section>
			</div>
      <button onClick={handleClearAllCookies}>Clear All Cookies</button>
		</>
	);
}
