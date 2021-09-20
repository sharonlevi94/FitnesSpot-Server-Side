'use strict';

const tableName = 'posts',
    dataBase = require('../../middleware/database')
module.exports = {
    selectPosts,
    addPost
}

async function selectPosts(quary){
    let posts = await dataBase.getObjects(tableName);

    if(quary.keyWord){
        posts = posts.filter(post => post.content.includes(quary.keyWord));
    }
    return posts;
}

function addPost(post){
    return dataBase.insert(tableName, post);
}