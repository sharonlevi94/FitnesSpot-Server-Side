'use strict';

const tableName = 'users',
    dataBase = require('../../middleware/database')
module.exports = {
    selectUsers,
    addUser
}

async function  selectUsers(quary){
    let users = await dataBase.getObjects(tableName);

    if(quary.firstName)
        users = users.filter(user => user.first_name == quary.firstName);

    if(quary.lastName)
        users = users.filter(user => user.last_name == quary.lastName);

    return users;
}

function addUser(user){
    return dataBase.insert(tableName, user);
}