const users = require('./users/users.service.js');
const households = require('./households/households.service.js');
const householdmember = require('./householdmember/householdmember.service.js');
const expensetype = require('./expensetype/expensetype.service.js');
const periodicpayments = require('./periodicpayments/periodicpayments.service.js');
const hoseholdexpense = require('./hoseholdexpense/hoseholdexpense.service.js');
const dateByFilter = require('./date-by-filter/date-by-filter.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(households);
  app.configure(householdmember);
  app.configure(expensetype);
  app.configure(periodicpayments);
  app.configure(hoseholdexpense);
  app.configure(dateByFilter);
};
