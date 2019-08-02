const express = require('express');
const env = require('dotenv').config();
const router = express.Router();
const cors = require('cors');
/*
const authMiddleware = require('../../../middleware/auth')
const authorization = require('../../../middleware/authorization');
*/
const cajaController = require('../controller/caja');

/* GET ALL CAJA*/
router.get('/',[cors()/*, authMiddleware, authorization('clients','list')*/ ], cajaController.all_cajas);

/* ADD ONE CAJA*/
router.post('/',[cors()/*, authMiddleware, authorization('clients','insert' )*/], cajaController.insert_caja);

/* UPDATE ONE CAJA*/
router.put('/:id',[cors()/*, authMiddleware, authorization('clients','update')*/], cajaController.update_caja);

/* DELETE ONE CAJA*/
router.delete('/:id',[cors()/*, authMiddleware, authorization('clients','delete')*/], cajaController.delete_caja);

/* GET ONE CAJA*/
router.get('/:id',[cors()/*, authMiddleware, authorization('clients', 'show')*/], cajaController.show_caja);

/* CLOSE ONE CAJA*/
router.put('/:id/close',[cors()/*, authMiddleware, authorization('clients','delete')*/], cajaController.close_caja);


/* GET ALL ENTRADAS OF ONE CAJA */
router.get('/:id/entradas',[cors()/*, authMiddleware, authorization('clients', 'list_client_locations')*/], cajaController.all_entradas_cajas);

/* ADD ENTRADA OF ONE CAJA */
router.post('/:id/addentrada',[cors()/*, authMiddleware, authorization('clients', 'add_client_locations')*/], cajaController.add_entrada_caja);

/* REMOVE ENTRADA OF ONE CAJA */
router.post('/:id/entradas/:id_entrada',[cors()/*, authMiddleware, authorization('clients', 'remove_client_locations')*/], cajaController.remove_entrada_caja);


/* GET ALL SALIDAS OF ONE CAJA */
router.get('/:id/salidas',[cors()/*, authMiddleware, authorization('clients', 'list_client_locations')*/], cajaController.all_salidas_cajas);

/* ADD SALIDAS OF ONE CAJA */
router.post('/:id/addsalida',[cors()/*, authMiddleware, authorization('clients', 'add_client_locations')*/], cajaController.add_salida_caja);

/* REMOVE SALIDAS OF ONE CAJA */
router.post('/:id/salidas/:id_salida',[cors()/*, authMiddleware, authorization('clients', 'remove_client_locations')*/], cajaController.remove_salida_caja);


module.exports = router;
