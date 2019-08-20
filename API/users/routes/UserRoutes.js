const express = require('express');
const env = require('dotenv').config();
const router = express.Router();
const cors = require('cors');
const authMiddleware = require('../../middleware/auth')
const authorization = require('../../middleware/authorization');
const userController = require('../controllers/UserController');

/**
 * @apiDefine UserNotFoundError
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

/**
 * @apiDefine UnauthorizedError
 *
 * @apiError Unauthorized Only authenticated users can access the endpoint.
 *
 * @apiErrorExample  Unauthorized response:
 *     HTTP 401 Unauthorized
 *     {
 *       "message": "Unauthorized"
 *     }
 */

/**
 * @api {get} / users list
 * @apiGroup users
 * @apiName usersList
 * @apiSuccess {json[]} users
 * @apiSuccessExample {json} Success
 *      HTTP/1.1 200 OK
 *      Content-Type: application/json
 *      [
 {
        "id": 1,
        "uid": "a7326c90-5fc0-11e9-8f7b-432c254476b5",
        "first_name": "Hector",
        "middle_name": "J",
        "last_name": "Contreras",
        "username": "hectorjcr",
        "email": "hectorjcr@gmail.com",
        "password": "$2a$10$.BK4zEH1vgdhvWGAJz72/u/vRAzGit2ifeLdy0CWmcsRYgiYsPXJe",
        "address": "gallo 606",
        "zipCode": "1190",
        "phone": "1127380985",
        "mobile": "1127380985",
        "city": "CABA",
        "state": "BA",
        "country": "Argentina",
        "is_active": 1,
        "profile_image": null,
        "deleted_at": null,
        "createdAt": "2019-04-15T20:54:25.000Z",
        "updatedAt": null
    },
 {
        "id": 2,
        "uid": "d7a60710-66a5-11e9-ad0f-2124f7b431a0",
        "first_name": "Cris",
        "middle_name": "L",
        "last_name": "Colmenares",
        "username": "crislubo",
        "email": "crislubo10@gmail.com",
        "password": "$2a$10$ey/eHQYuuM3PAKRCAGOxNelMi7GLAYf/3BRbcrcpTtb8eYEiJ8fJW",
        "address": "gallo 606",
        "zipCode": "1190",
        "phone": "1127380985",
        "mobile": "1127380985",
        "city": "CABA",
        "state": "BA",
        "country": "Argentina",
        "is_active": 1,
        "profile_image": null,
        "deleted_at": null,
        "createdAt": "2019-04-24T15:30:29.000Z",
        "updatedAt": "2019-04-24T18:48:15.000Z"
    }
 ]
 *
 *@apiUse UnauthorizedError
 */
router.get('/',[cors(), authMiddleware, authorization('users','list') ], userController.all_users);

/**
 *
 * @api {post} /
 * @apiGroup users
 * @apiName createUser
 * @apiParam {String} first_name first user name required
 * @apiParam {String} middle_name initial letter of the middlename not required
 * @apiParam {String} last_name user's lasst name not required
 * @apiParam {String} username user name its a unique field required
 * @apiParam {String} email user's email its a unique field required
 * @apiParam {String} password password required
 * @apiParam {String} user's residence address - not required
 * @apiParam {String} zip_code postal code - not required
 * @apiParam {String} residence phone number - not required
 * @apiParam {String} phone mobile phone number - not required
 * @apiParam {String} city
 * @apiParam {String} state
 * @apiParam {String} country
 * @apiParam {String} profile_image
 *
 * 
 *
 * @apiUse UnauthorizedError
 *
 */
router.post('/',[cors(), authMiddleware, authorization('users','insert' )], userController.insert_user);

router.put('/:uid',[cors(), authMiddleware, authorization('users','update')], userController.update_user);

router.delete('/:uid',[cors(), authMiddleware, authorization('users','delete')], userController.delete_user);

router.get('/:uid',[cors(), authMiddleware, authorization('users', 'show')], userController.show_user);


module.exports = router;