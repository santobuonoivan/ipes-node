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

/* GET ALL ENTRADAS OF ONE CAJA */
router.get('/:id/entradas',[cors()/*, authMiddleware, authorization('clients', 'list_client_locations')*/], cajaController.client_locations);

/*
router.post('/:id/addlocations',[cors()/*, authMiddleware, authorization('clients', 'add_client_locations')], clientsController.client_add_locations);

router.post('/:id/removelocations',[cors()/*, authMiddleware, authorization('clients', 'remove_client_locations')], clientsController.client_remove_locations);
*/

module.exports = router;
