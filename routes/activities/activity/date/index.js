'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic'),
    validate = require('express-jsonschema').validate

router.get('/',
    async (req, res) => {
        let result = await logic.getDate(req.params.activityId);
        res.status(200).json({result});
    });

router.put('/',
    validate( {
        body:{
            type: 'object',
            additionalProperties: false,
            properties:{
                date:{
                    type: 'object',
                    additionalProperties: false,
                    properties:{
                        year:{type: 'number', format: 'numeric', minimum: 2000, required: true},
                        month:{type: 'number', format: 'numeric', minimum: 1, maximum: 12, required: true},
                        day:{type: 'number', format: 'numeric', minimum: 1, maximum: 31, required: true}
                    }
                }
            }
        }
    }),
    async (req, res) => {
        const result = await logic.updateDate(Number(req.params.activityId), req.body.date);
        res.status(200).json({result});
    });

router.use('/:partOfDate', require('./partOfDate'));

module.exports = router;