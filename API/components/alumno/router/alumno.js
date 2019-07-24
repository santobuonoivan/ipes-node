const express = require('express');
const env = require('dotenv').config();
const router = express.Router();
const cors = require('cors');
/*
const authMiddleware = require('../../../middleware/auth')
const authorization = require('../../../middleware/authorization');
*/
const alumnsController = require('../controller/alumno');

/* GET ALL */
router.get('/',[cors()/*, authMiddleware, authorization('clients','list')*/ ], alumnsController.all_alumns);

/* ADD ONE */
router.post('/',[cors()/*, authMiddleware, authorization('clients','insert' )*/], alumnsController.insert_alumn);

/* UPDATE ONE */
router.put('/:id',[cors()/*, authMiddleware, authorization('clients','update')*/], alumnsController.update_alumn);

/* DELETE ONE (DESACTIVATE) */
router.delete('/:id',[cors()/*, authMiddleware, authorization('clients','delete')*/], alumnsController.delete_alumn);

/* GET ONE */
router.get('/:id',[cors()/*, authMiddleware, authorization('clients', 'show')*/], alumnsController.show_alumn);

/*
router.get('/:id/locations',[cors()/*, authMiddleware, authorization('clients', 'list_client_locations')], clientsController.client_locations);

router.post('/:id/addlocations',[cors()/*, authMiddleware, authorization('clients', 'add_client_locations')], clientsController.client_add_locations);

router.post('/:id/removelocations',[cors()/*, authMiddleware, authorization('clients', 'remove_client_locations')], clientsController.client_remove_locations);
*/

module.exports = router;
