'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic')

router.get('/',
    (req, res) => {
        let result = logic.getUsers(req.query);
        res.status(200).json({result});
    });

router.post('/',
    (req, res) => {
        const result = logic.createUser(req.body.user);
        res.status(200).json({result});
    });

module.exports = router;