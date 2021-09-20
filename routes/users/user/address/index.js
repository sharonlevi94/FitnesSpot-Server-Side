'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic')

router.get('/',
    async (req, res) => {
        let result = await logic.getAddress(req.params.userId);
        res.status(200).json({result});
    });

router.put('/',
    async (req, res) => {
        const result = await logic.updateAddress(Number(req.params.userId), req.body.address);
        res.status(200).json({result});
    });

module.exports = router;