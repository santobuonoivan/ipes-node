const express = require('express');
const env = require('dotenv').config();
const router = express.Router();
const cors = require('cors');
/*
const authMiddleware = require('../../../middleware/auth')
const authorization = require('../../../middleware/authorization');
*/
const cuotasController = require('../controller/cuotas');

/* GET ALL */
router.get('/',[cors()/*, authMiddleware, authorization('clients','list')*/ ], cuotasController.all_cuotas);

/* TODO continuar cuotas router y agregar el traer todas por id alumno */

/* ADD ONE */
router.post('/',[cors()/*, authMiddleware, authorization('clients','insert' )*/], cuotasController.insert_cuota);

/* UPDATE ONE */
router.put('/:id',[cors()/*, authMiddleware, authorization('clients','update')*/], cuotasController.update_cuota);

/* DELETE ONE */
router.delete('/:id',[cors()/*, authMiddleware, authorization('clients','delete')*/], cuotasController.delete_cuota);

/* GET ONE */
router.get('/:id',[cors()/*, authMiddleware, authorization('clients', 'show')*/], cuotasController.show_cuota);

module.exports = router;