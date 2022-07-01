const { authenticate } = require('@feathersjs/authentication').hooks;
const validate = require('feathers-validate-joi')
const {schema} = require('./periodicpaymentsmodel')
const fetchhousehold = require("../periodicpayments/hooks/fetchhousehold")
const fetchexpensetype = require("../periodicpayments/hooks/fetchexpensetype")
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validate.form(schema,{ abortEarly: false}),fetchhousehold(),fetchexpensetype()],
    update: [validate.form(schema,{ abortEarly: false}),fetchhousehold(),fetchexpensetype()],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
