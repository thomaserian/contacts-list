const User=require('../models/User');
const GeneralUtilities=require('../utils/GeneralUtilities');
const util = require('util');
const jwt=require('jsonwebtoken');
const jwtVerify=util.promisify(jwt.verify);

async function userValidator(userId,deviceToken,fingerPrint,authorization)
{
    let users=await User.findAll({
        where:{
            id:userId,
            deviceToken:deviceToken,
            fingerPrint:fingerPrint,
            authorization:authorization
        }
    });
    return ( users.length > 0 ? users[0] : null );
}

module.exports=async function (req,res,next)
{
    try{
        const authorization=req.headers.authorization;
        const deviceToken=req.headers.devicetoken;
        const fingerPrint=req.headers.fingerprint;
        const decoded=await jwtVerify(authorization,process.env.JWT_SECRET||"secret");
        const userId=decoded.id;

        let user=await userValidator(userId,deviceToken,fingerPrint,authorization);
        if(user)
        {
            req.user=user;
            next();
        }
        else
        {
            next(GeneralUtilities.customError("ERR2",401));
        }
    }
    catch(err)
    {
        next(GeneralUtilities.customError("ERR2",401));
    }
};