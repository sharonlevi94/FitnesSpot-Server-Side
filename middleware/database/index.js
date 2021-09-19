'use strict'

const myDB = {
    activities: [{"workoutType":"Gym","date":{year: 2021, month: 9, day: 10},"time":{hours: 1, minutes: 30},"location":"Tel Aviv","calories":"300","difficulty":3,"note":"aaaaaaaaaa","id":1631448508684},
        {"workoutType":"Soccer","date":{year: 2021, month: 9, day: 12},"time":{hours: 0, minutes: 20},"location":"Tel Aviv","calories":"200","difficulty":3,"note":"yayayaya","id":1631913306440}],
    users:[{"first_name":"Leo","last_name":"Messi","user_name":"leo.messi10","password":"psg2021","age":"34","phone_number":"235235235","address":{city:"Paris", street: "Mona Lisa", number: "45"},"favorite_sports":"Soccer","id":1631096693345},
        {"first_name":"Sharon","last_name":"Levi","user_name":"sharon94","password":"3243l;kh;l","age":"27","phone_number":"2523523","address":{city:"Lapid", street: "HaEgoz", number: "10"},"favorite_sports":"Running","id":1631099293066},
        {"first_name":"Itay","last_name":"Shani","user_name":"Itay31","password":"rwer2342","age":"30","phone_number":"32423423","address":{city:"Hadid", street: "HaEla", number: "34"},"favorite_sports":"Hockey","id":1631163643722}],
    posts: [{"content":"This is updated post","id":1631097080700},{"content":"12345678","id":1631126935836}],
},
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
function getObjects(tableName, id){
    if (!myDB[tableName])
        return {msg: errorMsg}

    if(id)
        return _getObjById(tableName, id);

    return JSON.parse(JSON.stringify(myDB[tableName]))
}
//-----------------------------------------------------------------------------
function insert(tableName, newObj){
    if (!myDB[tableName])
        return {msg: errorMsg}

    newObj.id = new Date().getTime()
    myDB[tableName].push(newObj)
    return newObj;
}
//-----------------------------------------------------------------------------
function remove(tableName, id){
    if (!myDB[tableName])
        return {msg: errorMsg}

    for(let i = 0 ; i < myDB[tableName].length ; i++)
        if(myDB[tableName][i].id == id)
            myDB[tableName].splice(i, 1);
}
//-----------------------------------------------------------------------------
function update(tableName, id, newObj){
    if (!myDB[tableName])
        return {msg: errorMsg}

    for(let obj of myDB[tableName])
        if(obj.id == id) {
            Object.assign(obj, newObj);
            return;
        }
}
//-----------------------------------------------------------------------------
function _getObjById(tableName, id){
    let arr = JSON.parse(JSON.stringify(myDB[tableName].filter(obj => obj.id == id)));
    return arr;
}
//-----------------------------------------------------------------------------
function patch(tableName, id, newData){
    if (!myDB[tableName])
        return {msg: errorMsg}

    for(let obj of myDB[tableName])
        if(obj.id == id) {
            for(let key in newData){
                obj[key] = newData[key];
            }
        }
}