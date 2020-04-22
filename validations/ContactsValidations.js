const { body,header,query} = require('express-validator');

module.exports.validate = (method) => {

    let validationsArray = new Array();

    //adding the three authentication headers by default to all apis 
    validationsArray.push(header('authorization', 'invalid authorization token').exists().isJWT());
    validationsArray.push(header('devicetoken', 'invalid device token').exists().isAlphanumeric());
    validationsArray.push(header('fingerprint', 'invalid finger print').exists().isNumeric());

    switch (method) {
        case 'addNewContact': {
            validationsArray.push(body('firstName', 'firstName doesn\'t exists').exists());
            validationsArray.push(body('lastName', 'lastName doesn\'t exists').exists());
            validationsArray.push(body('email', 'Invalid email').exists().isEmail());
            validationsArray.push(body('mobile').exists().isInt());
        }
        case 'findContacts': {
            validationsArray.push(query('pagenumber', 'invalid pagenumber').optional().isNumeric());
            validationsArray.push(query('searchText', 'invalid searchText').optional().isString());
        }
        case 'findRecentContacts': {
        }
    }

    return validationsArray;
}