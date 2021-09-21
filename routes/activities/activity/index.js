'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic'),
    validate = require('express-jsonschema').validate
//-----------------------------------------------------------------------------
router.get('/',
    async (req, res) => {
        let result = await logic.getActivity(Number(req.params.activityId));
        res.status(200).json({result});
        });
//-----------------------------------------------------------------------------
router.put('/',
    validate( {
        body:{
            type: 'object',
            additionalProperties: false,
            properties:{
                activity:{
                    type: 'object',
                    additionalProperties: false,
                    properties:{
                        workoutType: {type: 'string',format:'alpha', required: false},
                        date: {
                            type: 'object',
                            required: false,
                            additionalProperties: false,
                            properties:{
                                year:{type: 'number', format: 'numeric', minimum: 2000, required: false},
                                month:{type: 'number', format: 'numeric', minimum: 1, maximum: 12, required: false},
                                day:{type: 'number', format: 'numeric', minimum: 1, maximum: 31, required: false}
                            }},
                        time: {
                            type: 'object',
                            required: false,
                            additionalProperties: false,
                            properties:{
                                hours:{type: 'number', format: 'numeric', minimum: 0, maximum: 1000, required: false},
                                minutes:{type: 'number', format: 'numeric', minimum: 0, maximum: 59, required: false}
                            }},
                        location: {type: 'string',format:'alpha', required: false},
                        calories: {type: 'number', format: 'numeric', minimum: 0, maximum: 10000, required: false},
                        difficulty: {type: 'number', format: 'numeric', minimum: 1, maximum: 10, required: false},
                        note: {type: 'string', format: 'alpha', required: false},
                    }
                }
            }
        }
    }),
    (req, res) => {
        const result = logic.updateActivity(Number(req.params.activityId), req.body.activity);
        res.status(200).json({result});
    });
//-----------------------------------------------------------------------------
router.patch('/',
    validate( {
        body: {
            type: 'object',
            additionalProperties: false,
            properties: {
                workoutType: {type: 'string', format: 'alpha', required: false},
                date: {
                    type: 'object',
                    required: false,
                    additionalProperties: false,
                    properties: {
                        year: {type: 'number', format: 'numeric', minimum: 2000, required: false},
                        month: {type: 'number', format: 'numeric', minimum: 1, maximum: 12, required: false},
                        day: {type: 'number', format: 'numeric', minimum: 1, maximum: 31, required: false}
                    }
                },
                time: {
                    type: 'object',
                    required: false,
                    additionalProperties: false,
                    properties: {
                        hours: {type: 'number', format: 'numeric', minimum: 0, maximum: 1000, required: false},
                        minutes: {type: 'number', format: 'numeric', minimum: 0, maximum: 59, required: false}
                    }
                },
                location: {type: 'string', format: 'alpha', required: false},
                calories: {type: 'number', format: 'numeric', minimum: 0, maximum: 10000, required: false},
                difficulty: {type: 'number', format: 'numeric', minimum: 1, maximum: 10, required: false},
                note: {type: 'string', format: 'alpha', required: false},
            }
        }
    }),
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