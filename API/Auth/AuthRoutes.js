const express = require('express');
const router = express.Router();
const authController = require('./AuthController');
const cors = require('cors');


/**
 * @api {post} / User authentication
 * @apiGroup    Auth
 * @apiParam    (Request Body){String} email user email
 * @apiParam    (Request Body){String} password user password
 * @apiSuccess  {String} x-auth-token returns a JWT string
 * @apiSuccessExample {json} Success
 *      HTTP/1.1 200 OK
 *      {
 *      "x-auth-token": "eJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJoZWN0b3JqY3JAZ21haWwuY29tIiwiaWF0IjoxNTU2OTA0NDU2fQ.pyV-cNZpR0QWqatsH28LmWdMz0fEWPnzU61uw2YYDlI"
 *     }
 * @apiError (Bad Credentials) {string} error the <code>email</code> or <code>password</code> are not valid
 *
 * @apiError (Error 4xx) {string} error the <code>email</code> is required
 * @apiError (Error 4xx) {string} error the <code>password</code> is required
 * @apiError (Error 4xx) {string} error <code>email</code> and <code>password</code> are required
 *
 *
 */
router.post('/',cors(),authController.authenticate);

module.exports = router;