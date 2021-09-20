'use strict'
const fs = require('fs').promises,
    errorMsg = 'no such table';
//-----------------------------------------------------------------------------
module.exports = {
    getObjects,
    insert,
    remove,
    update,
    patch
}
//-----------------------------------------------------------------------------
async function getObjects(tableName, id) {
    const db = await _readFromFile()
        if (!db[tableName])
            return {msg: errorMsg}
        if (id)
           return _getObjById(db[tableName], id)
        return db[tableName]
}
//-----------------------------------------------------------------------------
async function insert(tableName, newObj){
    const db = await _readFromFile()
        if (!db[tableName])
            return {msg: errorMsg}

        newObj.id = new Date().getTime()
        db[tableName].push(newObj)
        _writeToFile(db);
        return newObj;
}
//-----------------------------------------------------------------------------
async function remove(tableName, id){
    let db = await _readFromFile()
    if (!db[tableName])
        return {msg: errorMsg};

    for(let i = 0 ; i < db[tableName].length ; i++)
        if(db[tableName][i].id == id) {
            db[tableName].splice(i, 1);
            _writeToFile(db);
            return;
        }
}
//-----------------------------------------------------------------------------
async function update(tableName, id, newObj){
    const db = await _readFromFile();
    if (!db[tableName])
        return {msg: errorMsg}

    for(let obj of db[tableName])
        if(obj.id == id) {
            Object.assign(obj, newObj);
            _writeToFile(db);
            return;
        }
}
//-----------------------------------------------------------------------------
function _getObjById(arr, id){
    return JSON.parse(JSON.stringify(arr.filter(obj => obj.id == id)));
}
//-----------------------------------------------------------------------------
async function patch(tableName, id, newData){
    let myDB = await _readFromFile()
        if (!myDB[tableName])
            return {msg: errorMsg}

        for(let obj of myDB[tableName])
            if(obj.id == id) {
                for(let key in newData){
                    obj[key] = newData[key];
                }
                _writeToFile(myDB);
                return;
            }
}
//-----------------------------------------------------------------------------
async function _readFromFile(){
    let db = []
    try {
        db = await fs.readFile(__dirname + '/db.txt', {encoding: 'utf8', flag: 'r'})
        db = JSON.parse(db)
    }
    catch(err){
        console.error(err)
    }
    return db
}
//-----------------------------------------------------------------------------
function _writeToFile(db){
    fs.writeFile(__dirname + '/db.txt',JSON.stringify(db), err => {
        if (err) {
            console.error(err)
            return undefined;
        }
        //file written successfully
    })
}
//-----------------------------------------------------------------------------
