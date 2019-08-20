const express = require('express');
const router = express.Router();
const cors = require('cors');
const authMiddleware = require('../../middleware/auth');
const authorization = require('../../middleware/authorization');
const userPermissionsController = require('../controllers/UserPermissionsController');


router.get('/:uid',[cors(), authMiddleware, authorization('roles','list') ], userPermissionsController.all_user_permissions);

router.post('/:uid',[cors(), authMiddleware, authorization('users','list' )], userPermissionsController.add_user_permissions);

router.delete('/:uid',[cors(), authMiddleware, authorization('users','list')], userPermissionsController.remove_user_permissions);

module.exports = router;