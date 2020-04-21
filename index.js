var app = require('express')();
var bodyParser = require('body-parser');
var compression = require("compression");  
var morgan = require('morgan');
const sequelize = require('./utils/database');
const sequelizeDefaults=require('./sequelize-utils/Defaults');
const util = require('util');

(async () => {
  try
  {
    await sequelize.sync({ alter: true });
    await sequelizeDefaults();

    app.listen(process.env.SERVER_PORT, function () {
      console.log('contacts list app listening!');
    });
  }
  catch(err){
    console.log(err);
  }
})();

app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//handling /api route
app.use('/api', require('./routes'));