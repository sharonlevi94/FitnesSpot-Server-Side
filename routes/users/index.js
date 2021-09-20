'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic')

router.get('/',
     async (req, res) => {
        let result = await logic.getUsers(req.query);
        res.status(200).json({result});
    });

router.post('/',
    async (req, res) => {
        const result = await logic.createUser(req.body.user);
        res.status(200).json({result});
    });

router.use('/:userId', require('./user'));
module.exports = router;