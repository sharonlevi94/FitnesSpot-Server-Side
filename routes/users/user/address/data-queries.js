'use strict';

const tableName = 'users',
        dataBase = require('../../../../middleware/database')
module.exports = {
    selectAddress, updateAddress
}

function selectAddress(id){
    return dataBase.getObjects(tableName, id);
}

async function updateAddress(id, newAddress){
    let newObj = await dataBase.getObjects(tableName, id);
    newObj[0].address = newAddress;
    return dataBase.update(tableName, id, newObj[0]);
}
