// Initializes the `hoseholdexpense` service on path `/hoseholdexpense`
const { Hoseholdexpense } = require('./hoseholdexpense.class');
const createModel = require('../../models/hoseholdexpense.model');
const hooks = require('./hoseholdexpense.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/hoseholdexpense', new Hoseholdexpense(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('hoseholdexpense');

  service.hooks(hooks);
};
