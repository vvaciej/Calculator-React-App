export function GetCookie(name) {
	const decoded = decodeURIComponent(document.cookie);
	const splited = decoded.split('; ');
	let result = null;

	splited.forEach(e => {
		const [cookieName, cookieValue] = e.split('=');
		if (cookieName === name) result = cookieValue;
	});

	return result;
}
