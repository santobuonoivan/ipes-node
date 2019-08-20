const { users } = require('../../components/db/db.mariadb.config');


/* todo add user permission  ->> "Agrega" permiso ilimitadamente, debería dar un mensaje "ya posee el permiso"
 */
/* todo list users permisions ->> Con id inválido da un response vacío
 */
/* todo delete user permission --> Si se envía sin body o con permissions string da error de timeout "Could not get any response" "Elimina" ilimitadamente, debería dar un mensaje de "no posee el permiso"
 */

exports.all_user_permissions = async function(req, res, next){
    try {
        let user = await users.findOne({
            where:{uid:req.params.uid},
            attributes:{
                exclude:['password']
            },
            include:['permissions']
        });
        return res.send(user);
    }catch (e) {
        return res.status(e.message);
    }
}

exports.add_user_permissions = async function(req, res, next){
    let user;
    try {
        user = await users.findOne({
            where:{uid:req.params.uid},
            include:['permissions']
        })
        if(!user) return res.send('user not found');
        if(req.body.permissions.length > 0){
            let a = await user.addPermissions(req.body.permissions);
            user = await users.findOne({
                where:{uid:req.params.uid},
                attributes:{
                    exclude:['password']
                },
                include:['permissions']
            });
            return res.send(user);
        }
        else{
            res.send('not were permissions sent');
        }
    }catch (e) {
        return res.status(400).send(e.message);
    }
};

exports.remove_user_permissions = async function (req, res, next) {
    try {
        let user = await users.findOne({
            where:{uid:req.params.uid},
            include:['permissions']
        });
        if(!user) {
            return res.status(400).send('user not found');
        }
        if(req.body.permissions.length > 0 ){
            let a = await user.removePermissions(req.body.permissions);
            user = await users.findOne({
                where:{uid:req.params.uid},
                attributes:{
                    exclude:['password']
                },
                include:['permissions']
            });
            res.send(user);
        }
        else{
            res.send('not permissions were sent')
        }
    }catch (e) {
        return res.status(400).send(e.message);
    }
}