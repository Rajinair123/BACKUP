// Initializes the `periodicpayments` service on path `/periodicpayments`
const { Periodicpayments } = require('./periodicpayments.class');
const createModel = require('../../models/periodicpayments.model');
const hooks = require('./periodicpayments.hooks');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate= {
    default: 10,
      count :10
  


 }

  console.log(paginate)
const options = {
  name:'periodicpayments',
    Model,
    paginate
    
  };

  // Initialize our service with any options it requires
  app.use('/periodicpayments', new Periodicpayments(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('periodicpayments');

  service.hooks(hooks);
};
