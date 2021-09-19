'use strict';

const tableName = 'activities',
    dataBase = require('../../../../middleware/database')
module.exports = {
    selectDate, updateDate
}

function selectDate(id){
    return dataBase.getObjects(tableName, id);
}

function updateDate(id, newDate){
    let newObj = dataBase.getObjects(tableName, id);
    newObj[0].date = newDate;
    dataBase.update(tableName, id, newObj[0]);
}
