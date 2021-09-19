'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getDate, updateDate
}

function getDate(id){
    let result =  dataQueries.selectDate(id);
    return result[0].date;
}

function updateDate(id, date){
    dataQueries.updateDate(id, date);
}
