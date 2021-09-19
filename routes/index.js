'use strict';

const router = require('express-promise-router')({
    mergeParams: true
});

router.use('/activities', require('./activities'));
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));


module.exports = router;