 const { authenticate } = require('@feathersjs/authentication').hooks;
 const joi = require('joi');
 const validate = require('feathers-validate-joi');
 const  {schema }= require('./householdmembermodel')
const fetchuser = require('../householdmember/hooks/fetchuser')
const fetchhousehold = require("../householdmember/hooks/fetchhousehold")
module.exports = {
  before: {
    all: [ ],
    find: [],
    get: [],
    create: [validate.form(schema,{ abortEarly: false}),
    fetchuser(),fetchhousehold()],
     update: [validate.form(schema,{ abortEarly: false})],
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
