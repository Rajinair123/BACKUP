// Initializes the `expensetype` service on path `/expensetype`
const { Expensetype } = require('./expensetype.class');
const createModel = require('../../models/expensetype.model');
const hooks = require('./expensetype.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/expensetype', new Expensetype(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('expensetype');

  service.hooks(hooks);
};
