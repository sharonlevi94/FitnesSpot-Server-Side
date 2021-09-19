'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getAddress, updateAddress
}

function getAddress(id){
    let result =  dataQueries.selectAddress(id);
    return result[0].date;
}

function updateAddress(id, date){
    dataQueries.updateAddress(id, date);
}
