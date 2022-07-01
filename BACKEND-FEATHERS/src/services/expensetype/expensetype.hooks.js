const { authenticate } = require('@feathersjs/authentication').hooks;
const validate = require("feathers-validate-joi");
const {schema} = require("./expensetypemodel")
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validate.form(schema,{abortEarly:false})],
    update: [validate.form(schema,{abortEarly:false})],
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
