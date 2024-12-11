export const resetCookieConsent = () => {
    localStorage.removeItem('cookieConsent');
    window.location.reload();
  };