export const initializeAds = () => {
  // Initialize ad services only after consent
  window.addEventListener('cookieConsentAccepted', () => {
    // Add your ad network initialization code here
    console.log('Ads initialized after consent');
  });
};

export const showAd = (containerId: string) => {
  const consent = localStorage.getItem('cookieConsent');
  if (consent === 'accepted') {
    // Add code to display ad in container
    console.log(`Showing ad in ${containerId}`);
  }
};