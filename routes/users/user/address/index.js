'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic'),
    validate = require('express-jsonschema').validate

router.get('/',
    async (req, res) => {
        let result = await logic.getAddress(req.params.userId);
        res.status(200).json({result});
    });

router.put('/',
    validate( {
        body:{
            type: 'object',
            additionalProperties: false,
            properties:{
                address:{
                    type: 'object',
                    additionalProperties: false,
                    properties:{
                        city: {type: 'string',format:'alpha', maxLength: 10, required: false},
                        street: {type: 'string',format:'alpha', maxLength: 10, required: false},
                        number: {type: 'number',format:'numeric', required: false},
                    }
                }
            }
        }
    }),
    async (req, res) => {
        const result = await logic.updateAddress(Number(req.params.userId), req.body.address);
        res.status(200).json({result});
    });

module.exports = router;