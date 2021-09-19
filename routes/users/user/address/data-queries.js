'use strict';

const tableName = 'users',
        dataBase = require('../../../../middleware/database')
module.exports = {
    selectAddress, updateAddress
}

function selectAddress(id){
    return dataBase.getObjects(tableName, id);
}

function updateAddress(id, newAddress){
    let newObj = dataBase.getObjects(tableName, id);
    newObj[0].address = newAddress;
    dataBase.update(tableName, id, newObj[0]);
}
