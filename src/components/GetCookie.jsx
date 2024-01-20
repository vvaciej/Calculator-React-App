import { useState } from "react";

export const getCookie = name => {
	const decoded = decodeURIComponent(document.cookie);
	const splited = decoded.split('; ');
	let result = null;

	splited.forEach(e => {
		const [cookieName, cookieValue] = e.split('=');
		if (cookieName === name) result = cookieValue;
	});
	
	return result;
}

export function GetCookie() {
  const [isAccepted, setIsAccepted] = useState(false);
  
  const handleAcceptAll = () => {
    localStorage.setItem('isAccepted', 'true'); 
    setIsAccepted(true);
  };

  const handleDeclineAll = () => {
    localStorage.setItem('isAccepted', 'false'); 
    setIsAccepted(false);
  };

	return (
    <>
      <div className={`cookies-div 
        ${localStorage.getItem('isAccepted') === 'false' ? 'active' : ''}`}
      >
        <h1>cookies</h1>
        <span>
          This page uses cookies. <a href='#'>Read more</a>
        </span>
        <section>
          <button onClick={handleAcceptAll}>Accept All</button>
          <button onClick={handleDeclineAll}>Decline All</button>
        </section>
      </div>
    </>
  )
};
