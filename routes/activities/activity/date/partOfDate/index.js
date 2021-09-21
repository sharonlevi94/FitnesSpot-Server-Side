'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic'),
    validate = require('express-jsonschema').validate

router.get('/',
    validate( {
        params:{
            type: 'object',
            additionalProperties: false,
            properties:{
                date:{
                    type: 'object',
                    additionalProperties: false,
                    properties:{
                        year:{type: 'number', format: 'numeric', minimum: 2000, required: false},
                        month:{type: 'number', format: 'numeric', minimum: 1, maximum: 12, required: false},
                        day:{type: 'number', format: 'numeric', minimum: 1, maximum: 31, required: false}
                    }
                }
            }
        }
    }),
    async (req, res) => {
        let result = await logic.getPartOfDate(req.params.activityId, req.params.partOfDate);
        res.status(200).json({result});
    });

router.patch('/',
    validate( {
        body:{
            type: 'object',
            additionalProperties: false,
            properties:{
                date:{
                    type: 'object',
                    additionalProperties: false,
                    properties:{
                        year:{type: 'number', format: 'numeric', minimum: 2000, required: false},
                        month:{type: 'number', format: 'numeric', minimum: 1, maximum: 12, required: false},
                        day:{type: 'number', format: 'numeric', minimum: 1, maximum: 31, required: false}
                    }
                }
            }
        }
    }),
    (req, res) => {
        const result = logic.updatePartOfDate(Number(req.params.activityId), req.body.partOfDate);
        res.status(200).json({result});
    });

module.exports = router;