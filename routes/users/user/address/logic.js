'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getAddress, updateAddress
}

async function getAddress(id){
    let result = await  dataQueries.selectAddress(id);
    return result[0].address;
}

function updateAddress(id, date){
    return dataQueries.updateAddress(id, date);
}
