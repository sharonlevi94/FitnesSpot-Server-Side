'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic')
//-----------------------------------------------------------------------------
router.get('/',
    (req, res) => {
        let result = logic.getUser(Number(req.params.userId));
        res.status(200).json({result});
    });
//-----------------------------------------------------------------------------
router.put('/',
    (req, res) => {
        const result = logic.updateUser(Number(req.params.userId), req.body.user);
        res.status(200).json({result});
    });
//-----------------------------------------------------------------------------
router.patch('/',
    (req, res) => {
        const result = logic.patchUser(Number(req.params.userId), req.body);
        res.status(200).json({result});
    });
//-----------------------------------------------------------------------------
router.delete('/',
    (req, res) => {
        const result = logic.deleteUser(Number(req.params.userId));
        res.status(200).json({result});
    });
//-----------------------------------------------------------------------------
router.use('/:address', require('./address'));
module.exports = router;