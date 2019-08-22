const express = require('express');
const env = require('dotenv').config();
const router = express.Router();
const cors = require('cors');
const authMiddleware = require('../../middleware/auth');
const authorization = require('../../middleware/authorization');
const userController = require('../controllers/UserController');

router.get('/',[cors(), authMiddleware, authorization('users','list') ], userController.all_users);

router.post('/',[cors(), authMiddleware, authorization('users','insert' )], userController.insert_user);

router.put('/:id',[cors(), authMiddleware, authorization('users','update')], userController.update_user);

router.delete('/:id',[cors(), authMiddleware, authorization('users','delete')], userController.delete_user);

router.get('/:id',[cors(), authMiddleware, authorization('users', 'show')], userController.show_user);

module.exports = router;








