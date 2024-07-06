import { Config } from "./interfaces";

declare global {
	// this is global for all the project
	interface Navigator {
		// non-recognized data-points by typescript here
		userLanguage: string;
		UserAgent: string;
	}

	interface Document {
		// non-recognized data-points by typescript here
	}

	interface Window {
		// non-recognized data-points by typescript here
	}
} 

export class Utils {
	public static maintainLastXItems<T>(
		arr: T[],
		bufferSize: number,
		newItem: T
	) {
		if (arr.length >= bufferSize) {
			arr.shift();
			arr.push(newItem);
		} else {
			arr.push(newItem);
		}
	}

	public static fetch(config: Config) {
		if (!localStorage.getItem("fakeConfig")) {
			localStorage.setItem("fakeConfig", JSON.stringify(config));
		}
		setInterval(() => {
			try {
				const fakeConfig: Config = EventsManager.getConfig(
					"https://acme-server.com/conf"
				); // faking GET request to a server
				localStorage.setItem("fakeConfig", JSON.stringify(config));
				console.log(`new FakeConfig fetched at ${new Date()}`);
			} catch (error) {
				console.error(error);
			}
		}, config.COLLECTORS_INTERVAL);
	}

}
export class EventsManager {
	public static getConfig(url?: string): Config {
		const config: Config = JSON.parse(localStorage.getItem("fakeConfig") ?? "");
		return config;
	}

	/*
	faking getting config from server:
	public static fakeGetConfig(url: string): Config {
		setInterval(async() => {
			const data = await fetch(url);
			const jsonData = await data.json();
			return jsonData;
		}, config.COLLECTORS_INTERVAL);
	}
	*/

	public static async updateData(data: object) {
		try {
			const response = await fetch("https://acme-server.com/conf", {
				method: "POST",
				body: JSON.stringify(data),
			});
			console.log(`status of the request: ${response}`);
		} catch (error) {
			console.error(`Cannot post data to the server, exit with error: ${error}`);
		}
	}
}
