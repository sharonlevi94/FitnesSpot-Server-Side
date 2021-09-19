'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getPosts,
    createPost,
}

function getPosts(quary){
    return dataQueries.selectPosts(quary);
}

function createPost(post){
    return dataQueries.addPost(post);
}
