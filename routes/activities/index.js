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
    validate( {
        body:{
            type: 'object',
            additionalProperties: false,
            properties:{
                item:{
                    type: 'object',
                    additionalProperties: false,
                    properties:{
                        workoutType: {type: 'string',format:'alpha', required: true},
                        date: {
                            type: 'object',
                            required: true,
                            additionalProperties: false,
                            properties:{
                                year:{type: 'number', format: 'numeric', minimum: 2000, required: true},
                                month:{type: 'number', format: 'numeric', minimum: 1, maximum: 12, required: true},
                                day:{type: 'number', format: 'numeric', minimum: 1, maximum: 31, required: true}
                            }},
                        time: {
                            type: 'object',
                            required: true,
                            additionalProperties: false,
                            properties:{
                                hours:{type: 'number', format: 'numeric', minimum: 0, maximum: 1000, required: false},
                                minutes:{type: 'number', format: 'numeric', minimum: 0, maximum: 59, required: true}
                            }},
                        location: {type: 'string', required: true},
                        calories: {type: 'string', format: 'numeric', minimum: 0, maximum: 10000, required: false},
                        difficulty: {type: 'number', format: 'numeric', minimum: 1, maximum: 10, required: false},
                        note: {type: 'string', required: false},
                    }
                }
            }
        }
    }),
    async (req, res) => {
    let result = await logic.createActivity(req.body.item)
        res.status(200).json({result})
    });


router.use('/settings', require('./settings'));
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