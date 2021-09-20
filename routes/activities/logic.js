'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getActivities,
    createActivity,
}

function getActivities(quary){
   return dataQueries.selectActivities(quary);
}

function createActivity(activity){
    return dataQueries.addActivity(activity);
}
