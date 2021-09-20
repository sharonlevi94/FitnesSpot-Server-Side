'use strict';

const router = require('express-promise-router')({
    mergeParams: true
}),
    logic = require('./logic')

router.get('/',
    async (req, res) => {
    let result = await logic.getActivities(req.query)
        res.status(200).json({result})
    });

router.post('/',
    async (req, res) => {
    let result = await logic.createActivity(req.body.activity)
        res.status(200).json({result})
    });

router.use('/:activityId', require('./activity'));

module.exports = router;