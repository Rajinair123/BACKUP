// Initializes the `dateByFilter` service on path `/date-by-filter`
const { DateByFilter } = require('./date-by-filter.class');
const createModel = require('../../models/date-by-filter.model');
const hooks = require('./date-by-filter.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };



//   const year = '2022';

//   const Today = moment(date,'DD').substarct(0,'date').format('DD')
//   const yesterday= moment(date,'DD').substarct(1,'date').format('DD')
//   const last7days= moment(date,'DD').substarct(7,'date').format('DD')
//   const lastmonth = moment(month,'MM').substarct(30,'date').format('MM')
//   const lastyear = moment(year,'YYYY').substarct(1,'year').format('YYYY')

//   const yearQuery ={
//     $lt:yesterday
//   }


//   // Initialize our service with any options it requires
//   app.use('/date-by-filter', new DateByFilter(options, app));

//   // Get our initialized service so that we can register hooks
//   const service = app.service('date-by-filter');

//   service.hooks(hooks);
};
