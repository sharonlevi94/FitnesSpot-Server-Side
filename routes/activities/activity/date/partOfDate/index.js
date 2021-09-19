'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic')

router.get('/',
    (req, res) => {
        let result = logic.getPartOfDate(req.params.activityId, req.params.partOfDate);
        res.status(200).json({result});
    });

/*router.put('/',
    (req, res) => {
        const result = logic.updateActivity(Number(req.params.activityId), req.body.activity);
        res.status(200).json({result});
    });*/

/*router.use('/:partOfDate', require('./partOfDate'));*/

module.exports = router;