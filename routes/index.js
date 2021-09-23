'use strict';

const router = require('express-promise-router')({
    mergeParams: true
});

router.use('/activities', require('./activities'));
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
router.use('/:settings-users', require('./settings'));
router.use('/:settings-activities', require('./settings'));
router.use('/:settings-posts', require('./settings'));
module.exports = router;