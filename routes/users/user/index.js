'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic'),
    validate = require('express-jsonschema').validate
//-----------------------------------------------------------------------------
router.get('/',
    async (req, res) => {
        let result = await logic.getUser(Number(req.params.userId));
        res.status(200).json({result});
    });
//-----------------------------------------------------------------------------
router.put('/',
    validate( {
        body:{
            type: 'object',
            additionalProperties: false,
            properties:{
                user:{
                    type: 'object',
                    additionalProperties: false,
                    properties:{
                        first_name: {type: 'string',format:'alpha', maxLength: 10, required: false},
                        last_name: {type: 'string',format:'alpha', maxLength: 10, required: false},
                        user_name: {type: 'string',format:'alphanumeric', required: false},
                        password: {type: 'string',format:'alphanumeric',minLength: 8, required: false},
                        age: {type: 'number', format: 'numeric', minimum: 18, maximum: 120, required: false},
                        address: {type: 'object',
                            required: false,
                            properties: {
                                city: {type: 'string',format:'alpha', required: false},
                                street: {type: 'string',format:'alpha', required: false},
                                number: {type: 'number',format:'numeric', required: false},
                            }},
                        phone_number: {type: 'number', format: 'numeric', minimum: 10, maximum: 10, required: false},
                        favorite_sport: {type: 'string',format:'alpha', required: false},
                    }
                }
            }
        }
    }),
    async (req, res) => {
        const result = await logic.updateUser(Number(req.params.userId), req.body.user);
        res.status(200).json({result});
    });
//-----------------------------------------------------------------------------
router.patch('/',
    async (req, res) => {
        const result = await logic.patchUser(Number(req.params.userId), req.body);
        res.status(200).json({result});
    });
//-----------------------------------------------------------------------------
router.delete('/',
    async (req, res) => {
        const result = await logic.deleteUser(Number(req.params.userId));
        res.status(200).json({result});
    });
//-----------------------------------------------------------------------------
router.use('/:address', require('./address'));
module.exports = router;