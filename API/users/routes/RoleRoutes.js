const express = require('express');
const env = require('dotenv').config();
const router = express.Router();
const cors = require('cors');
const authMiddleware = require('../../middleware/auth')
const authorization = require('../../middleware/authorization');
const roleController = require('../controllers/RolesController');


router.get('/',[cors(), authMiddleware, authorization('roles','list') ], roleController.all_roles);

router.post('/',[cors(), authMiddleware, authorization('roles','insert' )], roleController.insert_role);

router.put('/:id',[cors(), authMiddleware, authorization('roles','update')], roleController.update_role);

router.delete('/:id',[cors(), authMiddleware, authorization('roles','delete')], roleController.delete_role);

router.get('/:id',[cors(), authMiddleware, authorization('roles', 'show')], roleController.show_role);


module.exports = router;