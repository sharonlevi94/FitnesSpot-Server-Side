'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getUsers,
    createUser,
}

function getUsers(quary){
    return dataQueries.selectUsers(quary);
}

function createUser(user){
    return dataQueries.addUser(user);
}
