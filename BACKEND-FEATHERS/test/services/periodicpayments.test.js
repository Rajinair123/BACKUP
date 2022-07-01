const app = require('../../src/app');

describe('\'periodicpayments\' service', () => {
  it('registered the service', () => {
    const service = app.service('periodicpayments');
    expect(service).toBeTruthy();
  });
});
