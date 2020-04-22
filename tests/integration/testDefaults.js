const User=require('../../models/User');
const Contact=require('../../models/Contact');
const testsData=require('./testsData.json');

module.exports.addTestData=(async ()=>{
    await User.findOrCreate( { where: testsData.testUser } );

    for(let x=0;x<testsData.testUserContacts.length-1;x++)
    {
        await Contact.findOrCreate( { where : testsData.testUserContacts[x] });
    }
});

module.exports.removeTestData=(async ()=>{

    for(let x=0;x<testsData.testUserContacts.length-1;x++)
    {
        await Contact.destroy( { where : testsData.testUserContacts[x] });
    }

    await User.destroy( { where: testsData.testUser } );
});