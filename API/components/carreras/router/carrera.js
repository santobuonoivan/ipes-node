const express = require('express');
const env = require('dotenv').config();
const router = express.Router();
const cors = require('cors');
/*
const authMiddleware = require('../../../middleware/auth')
const authorization = require('../../../middleware/authorization');
*/
const carreraController = require('../controller/carrera');

/* GET ALL */
router.get('/',[cors()/*, authMiddleware, authorization('clients','list')*/ ], carreraController.all_carreras);

/* ADD ONE */
router.post('/',[cors()/*, authMiddleware, authorization('clients','insert' )*/], carreraController.insert_carrera);

/* UPDATE ONE */
router.put('/:id',[cors()/*, authMiddleware, authorization('clients','update')*/], carreraController.update_carrera);

/* DELETE ONE */
router.delete('/:id',[cors()/*, authMiddleware, authorization('clients','delete')*/], carreraController.delete_carrera);

/* GET ONE */
router.get('/:id',[cors()/*, authMiddleware, authorization('clients', 'show')*/], carreraController.show_carrera);

module.exports = router;