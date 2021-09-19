'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic')

router.get('/',
    (req, res) => {
        let result = logic.getDate(req.params.activityId);
        res.status(200).json({result});
    });

router.put('/',
    (req, res) => {
        const result = logic.updateDate(Number(req.params.activityId), req.body.date);
        res.status(200).json({result});
    });

router.use('/:partOfDate', require('./partOfDate'));

module.exports = router;