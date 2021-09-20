'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic')

router.get('/',
    async (req, res) => {
        let result = await logic.getPosts(req.query);
        res.status(200).json({result});
    });

router.post('/',
    async (req, res) => {
        const result = await logic.createPost(req.body.post);
        res.status(200).json({result});
    });

module.exports = router;