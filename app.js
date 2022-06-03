const express = require('express');
const nocache = require('nocache');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const debug = require('debug')('speed-your-net-server:app');

// defining the Express app
const app = express();
const envDev = app.get('env') === 'development';

// development only
if (envDev) {
  // adding morgan to log HTTP requests
  const logger = require('morgan');
  app.use(logger('dev'));
}

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 204,
};

console.log(corsOptions);

// disable caching
app.use(nocache());

// adding Helmet to enhance your API`s security
app.use(helmet());

// enabling CORS for all requests
app.use(cors(corsOptions));

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/files', express.static(path.join(__dirname + '/public/files')));

// error handler
app.use((err, req, res, next) => {
  // respond with json
  if (req.accepts('json')) {
    res.send({error: 'Not found'});
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

app.use('/', require('./routes'));

// development only
if (envDev) {
  // listing of endpoints
  const listEndpoints = require('express-list-endpoints');
  debug(listEndpoints(app));
}

module.exports = app;
