export const acmeSdkLoaded = new CustomEvent("acme-sdk-loaded", {
	bubbles: true,
	cancelable: true,
	composed: false,
	detail: {
		text: "acme-sdk-loaded event just happened",
	},
});
 