'use strict';

const tableName = 'activities',
    dataBase = require('../../../middleware/database')
module.exports = {
    selectActivity,
    updateActivity,
    deleteActivity,
    patchActivity
}

async function selectActivity(id){
   let objects = await dataBase.getObjects(tableName, id);
   for(let obj of objects){
       if(obj.id === id)
           return obj;
   }
}

function updateActivity(id, activity){
    return dataBase.update(tableName, id, activity);
}

function deleteActivity(id){
    return dataBase.remove(tableName, id);
}

function patchActivity(id, newData){
    return dataBase.patch(tableName, id, newData);
}