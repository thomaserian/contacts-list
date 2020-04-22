var app = require('./configurations/express');
const sequelize = require('./utils/database');
const sequelizeDefaults=require('./sequelize-utils/Defaults');

(async () => {
  try
  {
    await sequelize.sync({ alter: true });
    await sequelizeDefaults();

    app.listen(process.env.SERVER_PORT||2000, function () {
      console.log('contacts list app listening!');
    });
  }
  catch(err){
    console.log(err);
  }
})();