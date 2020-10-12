import FetchBase from './FetchBase';

class RestfulServices extends FetchBase {
  constructor() {
    super();
    this.endpoint = '';
  }

  getTodos() {
    const url = `${this.endpoint}/todos`;
    return this.rest(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // loginWithEmail(data) {
  //   data.application = 'web-sportsbook';
  //   const url = `${this.sportbookEndpoint}/login`;
  //   return this.rest(url, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json, text/javascript, */*; q=0.01',
  //       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  //     },
  //     data: this.serialize(data),
  //   });
  // }

  // forgotPassword(email) {
  //   const url = `${
  //     this.sportsbookPublicEndpoint
  //   }/accounts/forgotPassword?username=${encodeURIComponent(email)}`;
  //   return this.rest(url, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  // changePasswordByToken(data) {
  //   const url = `${this.sportbookEndpoint}/changePasswordByToken`;
  //   return this.rest(url, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json, text/javascript, */*; q=0.01',
  //       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  //     },
  //     data: this.serialize(data),
  //   });
  // }

  // getArenaSocialToken(socalName, data) {
  //   const url = this.arenaEndPoint + `/authorization/${socalName}`;
  //   return this.rest(url, {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     data,
  //   });
  // }

  // getCurrentSeason(data = {}) {
  //   const url = this.arenaEndPoint + `/streaky/seasons/active`;
  //   return this.rest(url, {
  //     method: 'GET',
  //     headers: {
  //       arenaSocialToken: this.arenaSocialToken,
  //       'Content-Type': 'application/json',
  //     },
  //     data,
  //   });
  // }

  // placeBets(data) {
  //   const url = this.arenaEndPoint + `/streaky/bets/placeBets`;
  //   return this.rest(url, {
  //     method: 'POST',
  //     headers: {
  //       arenaSocialToken: this.arenaSocialToken,
  //       'Content-Type': 'application/json',
  //     },
  //     data: JSON.stringify(data),
  //   });
  // }

  // getStreakySeasonResults() {
  //   const url = this.arenaEndPoint + `/streaky/user/seasons`;

  //   return this.rest(url, {
  //     method: 'GET',
  //     headers: {
  //       arenaSocialToken: this.arenaSocialToken,
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  // getUserSeasonDetails(seasonId) {
  //   const url = this.arenaEndPoint + `/streaky/user/seasons/${seasonId}`;

  //   return this.rest(url, {
  //     method: 'GET',
  //     headers: {
  //       arenaSocialToken: this.arenaSocialToken,
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  // getLayout(layout, brandCode) {
  //   const url = `${this.nodeEndpoint}/layout?route=${layout}||${brandCode}::DEFAULT`;
  //   return this.rest(url, {
  //     method: 'GET',
  //   });
  // }

  // scoreSeasonForSharing(seasonId, socialName) {
  //   const url = `${this.arenaEndPoint}/streaky/user/seasons/${seasonId}/share-points`;
  //   return this.rest(url, {
  //     method: 'PUT',
  //     headers: {
  //       arenaSocialToken: this.arenaSocialToken,
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  // getCustomerDetails() {
  //   const url = `${this.arenaEndPoint}/streaky/user/details`;
  //   return this.rest(url, {
  //     method: 'GET',
  //     headers: {
  //       arenaSocialToken: this.arenaSocialToken,
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  // updateCustomerDetails(data) {
  //   const url = `${this.arenaEndPoint}/streaky/user/details`;
  //   return this.rest(url, {
  //     method: 'POST',
  //     headers: {
  //       arenaSocialToken: this.arenaSocialToken,
  //       'Content-Type': 'application/json',
  //     },
  //     data: JSON.stringify(data),
  //   });
  // }

  // listCountries() {
  //   const url = `${this.sportbookEndpoint}/listCountries`;
  //   return this.rest(url, {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     data: { locale: this.locale() },
  //   });
  // }

  // validateRegistrationFields(data) {
  //   const url = `${this.sportbookEndpoint}/validateRegistrationFields`;
  //   return this.rest(url, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json, text/javascript, /; q=0.01',
  //       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  //     },
  //     data: this.serialize({ registrationFields: data, locale: this.locale() }),
  //   });
  // }

  // register(data) {
  //   const url = `${this.sportbookEndpoint}/register`;
  //   return this.rest(url, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json, text/javascript, /; q=0.01',
  //       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  //     },
  //     data: this.serialize({ registrationJson: data, locale: this.locale() }),
  //   });
  // }

  // createUserNotifiactionDevice(deviceId) {
  //   const url = `${this.arenaEndPoint}/streaky/user/notifications/${deviceId}`;
  //   return this.rest(url, {
  //     method: 'POST',
  //     headers: {
  //       arenaSocialToken: this.arenaSocialToken,
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  // deleteUserNotifiactionDevice(deviceId) {
  //   const url = `${this.arenaEndPoint}/streaky/user/notifications/${deviceId}`;
  //   return this.rest(url, {
  //     method: 'DELETE',
  //     headers: {
  //       arenaSocialToken: this.arenaSocialToken,
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  // getResultHistoryForEvent(eventIds) {
  //   const params = this.serialize({ eventIds, locale: this.locale() });
  //   const url = `${this.sportbookEndpoint}/getResultHistoryForEvent?${params}`;
  //   return this.rest(url, {
  //     method: 'GET',
  //     headers: {
  //       arenaSocialToken: this.arenaSocialToken,
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }
}

const inst = new RestfulServices();
export default inst;
