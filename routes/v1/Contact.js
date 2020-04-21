const express =require('express');
const ContactsController=require('../../controllers/ContactsController');
const router=express.Router();
const checkAuth=require('../../middleware/check-auth');

router.post('',checkAuth,ContactsController.addNewContact);
router.get('',checkAuth,ContactsController.findContacts);
router.get('/recent',checkAuth,ContactsController.findRecentContacts);

module.exports=router;