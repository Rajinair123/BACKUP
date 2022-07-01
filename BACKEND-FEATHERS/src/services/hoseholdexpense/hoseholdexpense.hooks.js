const { authenticate } = require('@feathersjs/authentication').hooks;
const validate = require("feathers-validate-joi")
const {schema}= require("./householdexpensemodel")
const fetchhousehold = require("../hoseholdexpense/hooks/fetchhousehold");
const fetchexpensetype = require('../hoseholdexpense/hooks/fetchexpensetype');
fetchexpensetype
module.exports = {
  before: {
    all: [ ],
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
