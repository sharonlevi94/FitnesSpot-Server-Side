'use strict';
const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic'),
    validate = require('express-jsonschema').validate

//---------------------------------------------------------------

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

//---------------------------------------------------------------

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
                        first_name: {type: 'string', maxLength: 10, required: true},
                        last_name: {type: 'string', maxLength: 30, required: true},
                        user_name: {type: 'string',format:'alphanumeric', required: true},
                        password: {type: 'string',format:'alphanumeric',minLength: 8, required: true},
                        email: {type: 'string', required: true},
                        phone_number: {type: 'string', minLength: 10, maxLength: 10, required: false},
                        date_of_birth: {type: 'object',
                            additionalProperties: false,
                            properties:{
                                year:{type: 'number', format: 'numeric',required: true},
                                month:{type: 'number', format: 'numeric', minimum: 1, maximum: 12, required: true},
                                day:{type: 'number', format: 'numeric', minimum: 1, maximum: 31, required: true}
                            },
                        },
                        favorite_sports: {type: 'string', required: true},
                    }
                }
            }
        }
    }),
    async (req, res) => {
        const result = await logic.createUser(req.body.item);
        res.status(200).json({result});
    });

//---------------------------------------------------------------
router.use('/settings', require('./settings'));
router.use('/:userId',
    validate( {
        params:{
            type: 'object',
            additionalProperties: false,
            properties:{
                userId: {type: 'string', required: true},
            }
        }
    }),
    require('./user'));

module.exports = router;