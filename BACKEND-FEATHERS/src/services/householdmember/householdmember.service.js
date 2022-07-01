// Initializes the `householdmember` service on path `/householdmember`
 const { Householdmember } = require('./householdmember.class');
const createModel = require('../../models/householdmember.model');
const hooks = require('./householdmember.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
app.use('/householdmember', new Householdmember(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('householdmember');

  service.hooks(hooks);
};
