'use strict';

const tableName = 'activities',
    dataBase = require('../../middleware/database')
module.exports = {
    selectActivities,
    addActivity
}
//-----------------------------------------------------------------------------
function selectActivities(quary) {
    let activities = dataBase.getObjects(tableName);

        if (quary.calIsGreater) {
            activities = activities.filter(activity => activity.calories >= quary.calIsGreater)
        }
        if (quary.calIsLower) {
            activities = activities.filter(activity => activity.calories < quary.calIsLower)
        }
    return activities;
}
//-----------------------------------------------------------------------------
function addActivity(activity){
    dataBase.insert(tableName, activity);
}