const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: [ 'https://cse-341-1.onrender.com/movies/']
};

const outputFile = './swagger-output.json';
const routes = ['./app.js'];


swaggerAutogen(outputFile, routes, doc);