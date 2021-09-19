'use strict';

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', require('./routes'));

app.listen(port, ()=> {
    console.log(`app is running`);
})
