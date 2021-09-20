'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic')
//-----------------------------------------------------------------------------
router.get('/',
    async (req, res) => {
        let result = await logic.getActivity(Number(req.params.activityId));
        res.status(200).json({result});
        });
//-----------------------------------------------------------------------------
router.put('/',
    (req, res) => {
        const result = logic.updateActivity(Number(req.params.activityId), req.body.activity);
        res.status(200).json({result});
    });
//-----------------------------------------------------------------------------
router.patch('/',
    (req, res) => {
        const result = logic.patchActivity(Number(req.params.activityId), req.body);
        res.status(200).json({result});
    });
//-----------------------------------------------------------------------------
router.delete('/',
    (req, res) => {
        const result = logic.deleteActivity(Number(req.params.activityId));
        res.status(200).json({result});
    });
//-----------------------------------------------------------------------------
router.use('/:date', require('./date'));
module.exports = router;