'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getSettings,
}

function getSettings(){
    return dataQueries.selectSettings();
}

