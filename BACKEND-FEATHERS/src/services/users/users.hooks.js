const { authenticate } = require('@feathersjs/authentication').hooks;
const Joi = require("joi")
const validate = require('feathers-validate-joi');
const { schema } = require('./usermodel')


const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
       hashPassword('password')],
    update: [ 
      hashPassword('password'),],
    patch: [ ],
    remove: []
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
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
