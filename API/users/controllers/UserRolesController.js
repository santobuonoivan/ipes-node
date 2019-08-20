// const { users } = require('../../database/db.config'); for mysql
const { users } = require('../../components/db/db.mariadb.config');




/* todo add roles -->  Si se envía sin body, con rol inválido o con body en string da error de timeout "Could not get any response" y debería dar un error "amigable" Si se envía un rol que ya tiene da ok "Ilimitadamente" y debería decir que ya posee rol de usuario
 */
/* todo delete ->> A la espera de que se pueda eliminar, permissions necesarios "userS-roles" y no "user"
 */

exports.all_users_roles = async function (req, res, next) {
    try {
        let user = await users.findOne({
            where:{uid:req.params.uid},
            attributes:{
                exclude:['password']
            },
            include:['roles']
        })
        if(!user) return res.send('user not found');
        return res.send(user);

    }catch (e) {
        return res.status(400).send(e.errors[0].message);
    }
};

exports.user_add_role = async function (req, res, next) {
    try {
        let user = await users.findOne({
            where:{uid:req.params.uid},
            include:['roles']
        });
        if(!user) return res.send('user not found');
        if(!(req.body.roles instanceof Array) || req.body.roles == undefined || req.body.roles == null){
            return res.status(400).json({'error':'array roles needed'})
        }
        if(req.body.roles.length > 0){
            let a = await user.addRoles(req.body.roles);
            user = await users.findOne({
                where:{uid:req.params.uid},
                attributes:{
                    exclude:['password']
                },
                include:['roles']
            });
            return res.send(user);
        }
        else{
            return res.send('not roles were sent');
        }
    }catch (e) {
        return res.status(400).res.send(e.message);
    }
};

exports.user_remove_roles = async function (req, res, next){
    try {
        let user = await users.findOne({
            where:{uid:req.params.uid},
            attributes:{
                exclude:['password']
            },
            include:['roles']
        })
        if(!user) return res.send('user not found');
        if(!(req.body.roles instanceof Array) || req.body.roles == undefined || req.body.roles == null){
            return res.status(400).json({'error':'array roles needed'})
        }
        if(req.body.roles.length > 0){
            let a = await user.removeRoles(req.body.roles);
            user = await users.findOne({
                where:{uid:req.params.uid},
                attributes:{
                    exclude:['password']
                },
                include:['roles']
            });
            return res.send(user);
        }
        else{
            return res.send('not roles were sent');
        }
    }catch (e) {
        return res.status(400).send(e.errors[0].message);
    }
};