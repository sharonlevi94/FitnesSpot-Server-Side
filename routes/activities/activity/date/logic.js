'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getDate, updateDate
}

async function getDate(id){
    let result = await dataQueries.selectDate(id);
    return result[0].date;
}

function updateDate(id, date){
    return dataQueries.updateDate(id, date);
}
