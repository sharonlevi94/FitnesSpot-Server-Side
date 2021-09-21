'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic'),
    validate = require('express-jsonschema').validate

router.get('/',
    validate( {
        query:{
            type: 'object',
            additionalProperties: false,
            properties:{
                firstName: {type: 'string', format: 'alpha', required: false},
                lastName: {type: 'string', format: 'alpha', required: false}
            }
        }
    }),
     async (req, res) => {
        let result = await logic.getUsers(req.query);
        res.status(200).json({result});
    });

router.post('/',
    validate( {
        body:{
            type: 'object',
            additionalProperties: false,
            properties:{
                user:{
                    type: 'object',
                    additionalProperties: false,
                    properties:{
                        first_name: {type: 'string',format:'alpha', maxLength: 10, required: true},
                        last_name: {type: 'string',format:'alpha', maxLength: 10, required: true},
                        user_name: {type: 'string',format:'alphanumeric', required: true},
                        password: {type: 'string',format:'alphanumeric',minLength: 8, required: true},
                        age: {type: 'number', format: 'numeric', minimum: 18, maximum: 120, required: true},
                        address: {type: 'object',
                            required: false,
                            properties: {
                                city: {type: 'string',format:'alpha', required: true},
                                street: {type: 'string',format:'alpha', required: true},
                                number: {type: 'number',format:'numeric', required: false},
                            }},
                        phone_number: {type: 'number', format: 'numeric', minimum: 10, maximum: 10, required: false},
                        favorite_sport: {type: 'string',format:'alpha', required: true},
                    }
                }
            }
        }
    }),
    async (req, res) => {
        const result = await logic.createUser(req.body.user);
        res.status(200).json({result});
    });

router.use('/:userId',
    validate( {
        params:{
            type: 'object',
            additionalProperties: false,
            properties:{
                userId: {type: 'number', format: 'numeric', required: true},
            }
        }
    }),
    require('./user'));
module.exports = router;