// Initializes the `households` service on path `/households`
const { Households } = require('./households.class');
const createModel = require('../../models/households.model');
const hooks = require('./households.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/households', new Households(options, app));


  
  

  // Get our initialized service so that we can register hooks
  const service = app.service('households');
  

  service.hooks(hooks);
};
