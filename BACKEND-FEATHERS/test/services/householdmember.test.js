const app = require('../../src/app');

describe('\'householdmember\' service', () => {
  it('registered the service', () => {
    const service = app.service('householdmember');
    expect(service).toBeTruthy();
  });
});
