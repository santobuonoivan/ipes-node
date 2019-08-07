const express = require('express');
const env = require('dotenv').config();
const router = express.Router();
const cors = require('cors');
/*
const authMiddleware = require('../../../middleware/auth')
const authorization = require('../../../middleware/authorization');
*/
const materiaController = require('../controller/materia');

/* GET ALL */
router.get('/',[cors()/*, authMiddleware, authorization('clients','list')*/ ], materiaController.all_materias);

/* ADD ONE */
router.post('/',[cors()/*, authMiddleware, authorization('clients','insert' )*/], materiaController.insert_materia);

/* UPDATE ONE */
router.put('/:id',[cors()/*, authMiddleware, authorization('clients','update')*/], materiaController.update_materia);

/* DELETE ONE */
router.delete('/:id',[cors()/*, authMiddleware, authorization('clients','delete')*/], materiaController.delete_materia);

/* GET ONE */
router.get('/:id',[cors()/*, authMiddleware, authorization('clients', 'show')*/], materiaController.show_materia);

module.exports = router;