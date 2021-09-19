'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic')

router.get('/',
    (req, res) => {
        let result = logic.getAddress(req.params.userId);
        res.status(200).json({result});
    });

router.put('/',
    (req, res) => {
        const result = logic.updateAddress(Number(req.params.userId), req.body.address);
        res.status(200).json({result});
    });

router.use('/:partOfDate', require('./partOfDate'));

module.exports = router;