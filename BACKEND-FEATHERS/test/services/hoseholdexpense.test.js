const app = require('../../src/app');

describe('\'hoseholdexpense\' service', () => {
  it('registered the service', () => {
    const service = app.service('hoseholdexpense');
    expect(service).toBeTruthy();
  });
});
