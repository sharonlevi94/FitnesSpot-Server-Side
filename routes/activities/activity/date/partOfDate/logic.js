'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getPartOfDate,
}

function getPartOfDate(id, part){
    let result = {}
    result[part] = dataQueries.selectPartOfDate(id, part);
    return result;
}
