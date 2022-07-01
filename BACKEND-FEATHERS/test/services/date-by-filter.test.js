const app = require('../../src/app');

describe('\'dateByFilter\' service', () => {
  it('registered the service', () => {
    const service = app.service('date-by-filter');
    expect(service).toBeTruthy();
  });
});
