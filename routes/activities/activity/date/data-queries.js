'use strict';

const tableName = 'activities',
    dataBase = require('../../../../middleware/database')
module.exports = {
    selectDate, updateDate
}

function selectDate(id){
    return dataBase.getObjects(tableName, id);
}

async function updateDate(id, newDate){
    let newObj = await dataBase.getObjects(tableName, id);
    newObj[0].date = newDate;
    return dataBase.update(tableName, id, newObj[0]);
}
