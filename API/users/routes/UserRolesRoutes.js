const express = require('express');
const router = express.Router();
const cors = require('cors');
const authMiddleware = require('../../middleware/auth')
const authorization = require('../../middleware/authorization');
const userRolesController = require('../controllers/UserRolesController');


router.get('/:uid',[cors(), authMiddleware, authorization('user-roles','user_list_roles') ], userRolesController.all_users_roles);

router.post('/:uid',[cors(), authMiddleware, authorization('user-roles','user_add_role' )], userRolesController.user_add_role);

router.delete('/:uid',[cors(), authMiddleware, authorization('user-roles','user_remove_roles')], userRolesController.user_remove_roles);

module.exports = router;