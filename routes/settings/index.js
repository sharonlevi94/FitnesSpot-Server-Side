'use strict';

const router = require('express-promise-router')({mergeParams: true}),
        logic = require('./logic')

router.get('/',
    async (req, res) => {
    let result = await logic.getSettings(req.params.settings)
        res.status(200).json({result})
    });

module.exports = router;