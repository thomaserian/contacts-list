const express =require('express');
const ContactsController=require('../../controllers/ContactsController');
const ContactsValidations=require('../../validations/ContactsValidations');
const router=express.Router();
const checkAuth=require('../../middleware/check-auth');

router
    .route('')
          /**
         * @api {post} api/v1/contacts add contact
         * @apiDescription add a new contact to the logged in user
         * @apiVersion 1.0.0
         * @apiName Add New Contacts
         * @apiGroup Contacts
         * @apiSampleRequest http://127.0.0.1:2000/api/v1/contacts
         *
         * @apiHeader (Authorization) {String} authorization Authorization value.
         * @apiHeader (Authorization) {String} devicetoken device Token value.
         * @apiHeader (Authorization) {String} fingerprint finger Print value.
         * 
         * @apiParam {String} firstName first Name.
         * @apiParam {String} lastName last Name.
         * @apiParam {String} email email.
         * @apiParam {String} mobile mobile.
         * 
         * @apiSuccess {Number} id inserted contact's id.
         * @apiSuccess {String} firstName first Name.
         * @apiSuccess {String} lastName last Name.
         * @apiSuccess {String} email email.
         * @apiSuccess {String} mobile mobile.
         * @apiSuccess {Number} UserId User Id.
         * @apiSuccess {Date} updatedAt updated At.
         * @apiSuccess {Date} createdAt created At.
         *
         */
    .post(checkAuth,ContactsValidations.validate('addNewContact'),ContactsController.addNewContact);


router
    .route('')
          /**
         * @api {get} api/v1/contacts List contacts
         * @apiDescription list contacts belonging to the logged in user
         * @apiVersion 1.0.0
         * @apiName List Contacts
         * @apiGroup Contacts
         * @apiSampleRequest http://127.0.0.1:2000/api/v1/contacts
         *
         * @apiHeader (Authorization) {String} authorization Authorization value.
         * @apiHeader (Authorization) {String} devicetoken device Token value.
         * @apiHeader (Authorization) {String} fingerprint finger Print value.
         * 
         * @apiParam  {Number{1-}}         [pagenumber=1]     List page
         * @apiParam  {String}             [searchText] firstName's search text
         *
         * @apiSuccess {Object[]} contacts List of contacts.
         *
         */
    .get(checkAuth,ContactsValidations.validate('findContacts'),ContactsController.findContacts);


router
    .route('/recent')
      /**
         * @api {get} api/v1/contacts/recent List Recent contacts
         * @apiDescription list recent contacts belonging to the logged in user
         * @apiVersion 1.0.0
         * @apiName List Recent Contacts
         * @apiGroup Contacts
         * @apiSampleRequest http://127.0.0.1:2000/api/v1/contacts/recent
         * 
         * @apiHeader (Authorization) {String} authorization Authorization value.
         * @apiHeader (Authorization) {String} devicetoken device Token value.
         * @apiHeader (Authorization) {String} fingerprint finger Print value.
         *
         * @apiSuccess {Object[]} contacts List of contacts.
         *
         */
    .get(checkAuth,ContactsValidations.validate('findRecentContacts'),ContactsController.findRecentContacts);

module.exports=router;