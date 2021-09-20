'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic')
//-----------------------------------------------------------------------------
router.get('/',
    async (req, res) => {
        let result = await logic.getUser(Number(req.params.userId));
        res.status(200).json({result});
    });
//-----------------------------------------------------------------------------
router.put('/',
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