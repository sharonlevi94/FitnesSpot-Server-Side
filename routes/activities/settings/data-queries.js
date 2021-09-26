'use strict';

const tableName = 'settings-activities',
    dataBase = require('../../../middleware/database')
module.exports = {
    selectSettings,

}

async function selectSettings(){
    let settings = await dataBase.getObjects(tableName);
    return settings;
}
