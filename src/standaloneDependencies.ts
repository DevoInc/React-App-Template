import { NotiPopRequest, WebCoreRuntimeDeps } from '@devoinc/app-developer-kit';

class StandaloneNotiPop {
  constructor(request: NotiPopRequest) {
    console.log(`Creating a NotiPop`, request); // eslint-disable-line no-console
  }
}

export const standaloneDependencies: WebCoreRuntimeDeps = {
  goToQuery: (query: string) => {
    console.log(`Going to query '${query}'`); // eslint-disable-line no-console
  },
  userInfo: {
    name: 'John Doe',
    email: 'a@b.com',
    locale: 'en-US',
    timezone: 'America/New_York',
    domain: 'mock',
    vault: {
      id: 1,
      name: 'mock-vault-name',
      label: 'mock-vault-label',
      share: 1,
    },
    applications: [],
    credentials: {
      alertsURI: 'mock-alerts-uri',
      apiKey: 'mock-api-key',
      apiSecret: 'mock-api-secret',
      enigmaURI: 'mock-enigma-uri',
      investigationsURI: 'mock-investigations-uri',
      jwtSessionCredentials: {
        apiKey: 'mock-jwt-api-key',
        jwtUserId: 'mock-jwt-user-id',
      },
      marketplaceBundle: 'mock-marketplace-bundle',
      marketplaceURI: 'mock-marketplace-uri',
      serrea: 'mock-serrea',
      standAloneToken: 'mock-stand-alone-token',
    },
  },
  NotiPop: StandaloneNotiPop,
};
