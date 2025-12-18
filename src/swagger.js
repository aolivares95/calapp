import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'My Calapp API',
    description: 'modify calendar events and save to DB'
  },
  host: '192.168.1.251'
};

const outputFile = './swagger-output.json';
const routes = ['./calevent.routes.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);