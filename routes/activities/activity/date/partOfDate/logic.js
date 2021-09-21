'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getPartOfDate, updatePartOfDate
}

async function getPartOfDate(id, part){
    let result = {}
    result[part] = await dataQueries.selectPartOfDate(id, part);
    return result;
}

function updatePartOfDate(id, part){
    return dataQueries.updatePartOfDate(id, part);
}
