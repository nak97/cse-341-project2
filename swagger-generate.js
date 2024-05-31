const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: [ 'https://cse-341-1.onrender.com/contacts/']
};

const outputFile = './swagger-output.json';
const routes = ['./app.js'];


swaggerAutogen(outputFile, routes, doc);