const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const constants=require('../constants.json');
const Contact=require('../models/Contact');

module.exports.addNewContact=async function(req,res,next){
    try
    {
        let contact=await Contact.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            mobile:req.body.mobile,
            UserId:req.user.dataValues.id
        });

        res.status(200).json(contact);
    }
    catch(err)
    {
        next(err);
    }
};

module.exports.findContacts=async function(req,res,next){
    try
    {
        let whereConfig={};
        whereConfig.UserId=req.user.dataValues.id;

        if(req.query.searchText)
        {
            whereConfig.firstName={ [Op.like]: "%"+req.query.searchText+"%" };
        }

        const offset = ( req.headers.pagenumber ? ( Number(req.headers.pagenumber) -1 ) : 0) * constants.pageSize;
        const limit = constants.pageSize;

        let contacts=await Contact.findAll({
            limit,
            offset,
            where:whereConfig
        });

        res.status(200).json(contacts);
    }
    catch(err)
    {
        next(err);
    }
};

module.exports.findRecentContacts=async function(req,res,next){
    try
    {
        let contacts=await Contact.findAll({
            where: {
                UserId:req.user.id 
            },
            limit: 5,
            order:[
                ['createdAt','DESC']
            ]
        });

        res.status(200).json(contacts);
    }
    catch(err)
    {
        next(err);
    }
};