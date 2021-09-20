'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getUser,
    updateUser,
    deleteUser,
    patchUser
}

function getUser(id){
    return dataQueries.selectUser(id);
}

function updateUser(id, activity){
    return dataQueries.updateUser(id, activity);
}

function deleteUser(id){
    return dataQueries.deleteUser(id);
}

function patchUser(id, newData){
    return dataQueries.patchUser(id, newData);
}
