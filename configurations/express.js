const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('../routes');
const getMessage = require('../localization');
const GeneralUtilities= require('../utils/GeneralUtilities');

/**
* Express instance
* @public
*/
const app = express();

// request logging. dev: console | production: file
app.use(morgan(process.env.LOGS||"dev"));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// compression
app.use(compression());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount api routes
app.use('/api', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(GeneralUtilities.customError("ERR0", 404));
});

// error handler
app.use((error, req, res, next) => {
    error.message = getMessage((error.customCode ? error.customCode : "ERR1"), req.headers.language);
    res.status(error.status || 500).json({
        message:error.message
    });
});

module.exports = app;
