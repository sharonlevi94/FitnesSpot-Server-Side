'use strict';

const tableName = 'users',
    dataBase = require('../../middleware/database')
module.exports = {
    selectUsers,
    addUser
}

function  selectUsers(quary){
    let users =  dataBase.getObjects(tableName);

    if(quary.firstName)
        users = users.filter(user => user.first_name == quary.firstName);

    if(quary.lastName)
        users = users.filter(user => user.last_name == quary.lastName);

    return users;
}

function addUser(user){
    dataBase.insert(tableName, user);
}