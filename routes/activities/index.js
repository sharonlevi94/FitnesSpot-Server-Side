'use strict';

const router = require('express-promise-router')({
    mergeParams: true
}),
    logic = require('./logic')

router.get('/',
    (req, res) => {
    let result = logic.getActivities(req.query);
    res.status(200).json({result});
    });

router.post('/',
    (req, res) => {
        const result = logic.createActivity(req.body.activity);
        res.status(200).json({result});
    });

router.use('/:activityId', require('./activity'));

module.exports = router;