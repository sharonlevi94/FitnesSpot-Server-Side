'use strict';

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', require('./routes'));

_useErrorMiddlewares();

app.listen(port, ()=> {
    console.log(`app is running`);
})

function _useErrorMiddlewares() {
    app.use((err, req, res, next) => {
        // request aborted handler
        if (err.status === 400 && err.code === 'ECONNABORTED') {
            return res.status(err.status).json({
                error: err
            });
        }

        if (err.name !== 'JsonSchemaValidation') {
            return next(err);
        }

        res.status(400).json({
            statusText: 'Bad Request',
            jsonSchemaValidation: true,
            errors: err.validations  // All the validation information
        });
    });
}
