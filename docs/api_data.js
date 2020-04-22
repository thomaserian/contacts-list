define({ "api": [
  {
    "type": "post",
    "url": "api/v1/contacts",
    "title": "add contact",
    "description": "<p>add a new contact to the logged in user</p>",
    "version": "1.0.0",
    "name": "Add_New_Contacts",
    "group": "Contacts",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:2000/api/v1/contacts"
      }
    ],
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          },
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "devicetoken",
            "description": "<p>device Token value.</p>"
          },
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "fingerprint",
            "description": "<p>finger Print value.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>first Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>last Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>mobile.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>inserted contact's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>first Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>last Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>mobile.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserId",
            "description": "<p>User Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>updated At.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>created At.</p>"
          }
        ]
      }
    },
    "filename": "routes/v1/Contact.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "get",
    "url": "api/v1/contacts",
    "title": "List contacts",
    "description": "<p>list contacts belonging to the logged in user</p>",
    "version": "1.0.0",
    "name": "List_Contacts",
    "group": "Contacts",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:2000/api/v1/contacts"
      }
    ],
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          },
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "devicetoken",
            "description": "<p>device Token value.</p>"
          },
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "fingerprint",
            "description": "<p>finger Print value.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-",
            "optional": true,
            "field": "pagenumber",
            "defaultValue": "1",
            "description": "<p>List page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "searchText",
            "description": "<p>firstName's search text</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "contacts",
            "description": "<p>List of contacts.</p>"
          }
        ]
      }
    },
    "filename": "routes/v1/Contact.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "get",
    "url": "api/v1/contacts/recent",
    "title": "List Recent contacts",
    "description": "<p>list recent contacts belonging to the logged in user</p>",
    "version": "1.0.0",
    "name": "List_Recent_Contacts",
    "group": "Contacts",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:2000/api/v1/contacts/recent"
      }
    ],
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value.</p>"
          },
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "devicetoken",
            "description": "<p>device Token value.</p>"
          },
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "fingerprint",
            "description": "<p>finger Print value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "contacts",
            "description": "<p>List of contacts.</p>"
          }
        ]
      }
    },
    "filename": "routes/v1/Contact.js",
    "groupTitle": "Contacts"
  }
] });
