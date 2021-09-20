'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getActivity,
    updateActivity,
    deleteActivity,
    patchActivity
}

function getActivity(id){
    return dataQueries.selectActivity(id);
}

function updateActivity(id, activity){
    return dataQueries.updateActivity(id, activity);
}

function deleteActivity(id){
    return dataQueries.deleteActivity(id);
}

function patchActivity(id, newData){
    return dataQueries.patchActivity(id, newData);
}
