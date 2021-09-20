'use strict';

const tableName = 'users',
    dataBase = require('../../../middleware/database')
module.exports = {
    selectUser,
    updateUser,
    deleteUser,
    patchUser
}

async function selectUser(id){
    let objects = await dataBase.getObjects(tableName);
    for(let obj of objects){
        if(obj.id == id)
            return obj;
    }
}

function updateUser(id, user){
    return dataBase.update(tableName, id, user);
}

function deleteUser(id){
    return dataBase.remove(tableName, id);
}

function patchUser(id, newData){
    return dataBase.patch(tableName, id, newData);
}