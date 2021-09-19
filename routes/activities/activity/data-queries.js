'use strict';

const tableName = 'activities',
    dataBase = require('../../../middleware/database')
module.exports = {
    selectActivity,
    updateActivity,
    deleteActivity,
    patchActivity
}

function selectActivity(id){
    let objects =  dataBase.getObjects(tableName);
    for(let obj of objects){
        if(obj.id == id)
            return obj;
    }
}

function updateActivity(id, activity){
    dataBase.update(tableName, id, activity);
}

function deleteActivity(id){
    dataBase.remove(tableName, id);
}

function patchActivity(id, newData){
    dataBase.patch(tableName, id, newData);
}