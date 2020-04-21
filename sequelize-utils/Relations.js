const Contact = require('../models/Contact');
const User = require('../models/User');

User.hasMany(Contact);
Contact.belongsTo(User);