
interface GetBattery{
	level: number;
	charging: boolean;
}
declare global {
	// this is global for all the project
	interface Navigator {
		// non-recognized data-points by typescript here
		userLanguage: string;
		UserAgent: string;
		javaEnabled: string | (() => any);
		connection: object;
		mozConnection: object | boolean;
		webkitConnection: string;
		platform: string;
		deviceMemory: string;
		msDoNotTrack: string;
		getBattery: () => Promise<GetBattery>;
		msMaxTouchPoints: number;
	}

	interface Document {
		// non-recognized data-points by typescript here
	}

	interface Window {
		// non-recognized data-points by typescript here
		doNotTrack: string;
	}
}
