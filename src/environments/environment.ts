// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://open.faceit.com/data/v4',
  apiKey: '19981c39-26dc-43f8-8b08-e72bee3f824f',
  localApiUrl: 'http://localhost:8888/api',
  basicApiUrl: 'https://localhost:44384/api',
  faceitStatsHub: 'https://localhost:44384/hubs/faceitStats'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
