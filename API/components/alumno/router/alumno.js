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
router.post('/:id',[cors()/*, authMiddleware, authorization('clients','delete')*/], alumnsController.delete_alumn);

/* GET ONE */
router.get('/:id',[cors()/*, authMiddleware, authorization('clients', 'show')*/], alumnsController.show_alumn);


router.get('/:id/doc',[cors()/*, authMiddleware, authorization('clients', 'list_client_locations')*/], alumnsController.alumn_documentacion);
//router.get('/:id/carrera',[cors()/*, authMiddleware, authorization('clients', 'list_client_locations')*/], alumnsController.alumn_carrera);

router.get('/:id/full_info',[cors()/*, authMiddleware, authorization('clients', 'list_client_locations')*/], alumnsController.alumn_full_info);
router.get('/:id/cuotas_pagos',[cors()/*, authMiddleware, authorization('clients', 'list_client_locations')*/], alumnsController.alumn_cuotas_pagos);


/*
router.post('/:id/addlocations',[cors()/*, authMiddleware, authorization('clients', 'add_client_locations')], clientsController.client_add_locations);

router.post('/:id/removelocations',[cors()/*, authMiddleware, authorization('clients', 'remove_client_locations')], clientsController.client_remove_locations);
*/

module.exports = router;
