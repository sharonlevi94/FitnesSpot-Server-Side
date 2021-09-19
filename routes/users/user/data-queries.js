'use strict';

const tableName = 'users',
    dataBase = require('../../../middleware/database')
module.exports = {
    selectUser,
    updateUser,
    deleteUser,
    patchUser
}

function selectUser(id){
    let objects =  dataBase.getObjects(tableName);
    for(let obj of objects){
        if(obj.id == id)
            return obj;
    }
}

function updateUser(id, user){
    dataBase.update(tableName, id, user);
}

function deleteUser(id){
    dataBase.remove(tableName, id);
}

function patchUser(id, newData){
    dataBase.patch(tableName, id, newData);
}