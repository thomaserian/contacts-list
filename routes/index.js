const express=require('express');
const router = express.Router();
const Relations=require('../sequelize-utils/Relations');
const path=require('path');

// split up route handling
router.use('/v1/contacts', require('./v1/Contact'));

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

module.exports=router;