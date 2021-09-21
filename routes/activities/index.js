'use strict';

const router = require('express-promise-router')({mergeParams: true}),
        logic = require('./logic'),
        validate = require('express-jsonschema').validate


router.get('/',
     validate( {
         query:{
            type: 'object',
             additionalProperties: false,
             properties:{
                calIsGreater: {type: 'number', format: 'numeric', minimum: 0, required: false},
                 calIsLower: {type: 'number', format: 'numeric', minimum: 0, maximum: 1000, required: false}
             }
         }
     }),
    async (req, res) => {
    let result = await logic.getActivities(req.query)
        res.status(200).json({result})
    });

router.post('/',
    async (req, res) => {
    let result = await logic.createActivity(req.body.activity)
        res.status(200).json({result})
    });

router.use('/:activityId',
    validate( {
        params:{
            type: 'object',
            additionalProperties: false,
            properties:{
                activityId: {type: 'number', format: 'numeric', required: true},
            }
        }
    }),
    require('./activity'));

module.exports = router;