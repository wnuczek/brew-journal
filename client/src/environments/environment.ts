// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	apiUrl: "http://localhost:8080",
	firebaseConfig: {
		projectId: "wnuczek-testing",
		appId: "1:705828607818:web:743576a67bea3d9c1653b3",
		databaseURL:
			"https://wnuczek-testing-default-rtdb.europe-west1.firebasedatabase.app",
		storageBucket: "wnuczek-testing.appspot.com",
		// locationId: "europe-west",
		apiKey: "AIzaSyB1ktSX-IFGgkDPuOhaG-YOM0sspPxR0nI",
		authDomain: "wnuczek-testing.firebaseapp.com",
		messagingSenderId: "705828607818",
	},
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
