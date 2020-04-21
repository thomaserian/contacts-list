const User=require('../models/User');
const data=require('./data.json');

module.exports=(async ()=>{
    await User.findOrCreate( { where: data.defaults.users[0] } );
    await User.findOrCreate( { where: data.defaults.users[1] } );
});