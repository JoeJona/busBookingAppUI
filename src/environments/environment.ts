// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



const localBaseUrl = 'http://localhost:8080'
const remoteDevUrl = 'https://deliveryapp-747zw.ondigitalocean.app'
const remoteTestUrl = 'https://esoora-backend-prod-qiymu.ondigitalocean.ap'

export const environment = {
  production: false,
  resourceUrl:  localBaseUrl + '/user/resource',
  baseUserUrl: localBaseUrl + '/user',
  basePublicUrl: localBaseUrl + '/public',
  baseAgentUrl: localBaseUrl + '/agent',
  baseAgencyUrl: localBaseUrl + '/agency',
  baseAdminUrl: localBaseUrl + '/admin',
  baseRestaurantUrl: localBaseUrl + '/restaurant',
  baseStatisticsUrl: localBaseUrl + '/statistics',
  firebase: {
    apiKey: "AIzaSyBnYMCzY3426C_iZIUE56VNuMlG6aUydi0",
    authDomain: "ethioclick-web.firebaseapp.com",
    projectId: "ethioclick-web",
    storageBucket: "ethioclick-web.appspot.com",
    messagingSenderId: "27993054970",
    appId: "1:27993054970:web:5ecd4573a65ed8d71fb343"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
