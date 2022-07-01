const app = require('../../src/app');

describe('\'expensetype\' service', () => {
  it('registered the service', () => {
    const service = app.service('expensetype');
    expect(service).toBeTruthy();
  });
});
