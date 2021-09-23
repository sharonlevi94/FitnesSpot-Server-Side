'use strict';

const dataBase = require('../../middleware/database')
module.exports = {
    selectSettings,
}
//-----------------------------------------------------------------------------
async function selectSettings(settings) {
    let result = await dataBase.getObjects(settings)
    return result;
}
//-----------------------------------------------------------------------------
