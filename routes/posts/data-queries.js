'use strict';

const tableName = 'posts',
    dataBase = require('../../middleware/database')
module.exports = {
    selectPosts,
    addPost
}

function selectPosts(quary){
    let posts =  dataBase.getObjects(tableName);

    if(quary.keyWord){
        posts = posts.filter(post => post.content.includes(quary.keyWord));
    }
    return posts;
}

function addPost(post){
    dataBase.insert(tableName, post);
}