const express = require('express');
const router = express.Router();
const cors = require('cors');
const authMiddleware = require('../../middleware/auth')
const authorization = require('../../middleware/authorization');
const permissionsController = require('../controllers/PermissionsController');


router.get('/',[cors(), authMiddleware, authorization('permissions','list') ], permissionsController.all_permissions);

router.post('/',[cors(), authMiddleware, authorization('permissions','insert' )], permissionsController.insert_permission);

router.put('/:id',[cors(), authMiddleware, authorization('permissions','update')], permissionsController.update_permission);

router.delete('/:id',[cors(), authMiddleware, authorization('permissions','delete')], permissionsController.delete_permission);

router.get('/:id',[cors(), authMiddleware, authorization('permissions', 'show')], permissionsController.show_permission);


module.exports = router;