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
                keyWord: {type: 'string', format: 'alphanumeric', minimum: 1, required: false},
            }
        }
    }),
    async (req, res) => {
        let result = await logic.getPosts(req.query);
        res.status(200).json({result});
    });

router.post('/',
    validate( {
        body:{
            type: 'object',
            additionalProperties: false,
            properties:{
                post:{
                    type: 'object',
                    additionalProperties: false,
                    properties:{
                        content: {type: 'string',format:'alpha', maxLength: 10000, required: true},
                    }
                }
            }
        }
    }),
    async (req, res) => {
        const result = await logic.createPost(req.body.post);
        res.status(200).json({result});
    });

module.exports = router;