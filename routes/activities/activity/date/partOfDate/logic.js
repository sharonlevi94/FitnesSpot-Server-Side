'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getPartOfDate,
}

async function getPartOfDate(id, part){
    let result = {}
    result[part] = await dataQueries.selectPartOfDate(id, part);
    return result;
}
