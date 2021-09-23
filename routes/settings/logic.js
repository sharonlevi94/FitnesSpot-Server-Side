'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getSettings,
}

function getSettings(settings){
   return dataQueries.selectSettings(settings);
}
