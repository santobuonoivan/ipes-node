const {username,password,database,host,port,dialect, pool} = require('./mariadb.config')[process.env.NODE_ENV];
const Sequelize = require('sequelize');
const sequelize = new Sequelize(database,username,password, {
    host: host,
    dialect: dialect,
    port: port
});

const db ={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.alumno = require('../alumno/model/alumno')(sequelize,Sequelize);
db.caja = require('../caja/model/caja')(sequelize,Sequelize);
db.entrada = require('../caja/model/entradas')(sequelize,Sequelize);
db.salida = require('../caja/model/salidas')(sequelize,Sequelize);
db.carrera = require('../carreras/model/carreras')(sequelize,Sequelize);
db.cuota = require('../cuotas/model/cuotas')(sequelize,Sequelize);
db.documentacion = require('../documentacion/model/documentacion')(sequelize,Sequelize);
db.materia = require('../materias/model/materias')(sequelize,Sequelize);
db.modalidades = require('../modalidades/model/modalidades')(sequelize,Sequelize);
db.notas = require('../notas/model/notas')(sequelize, Sequelize);
db.pagos = require('../pagos/model/pagos')(sequelize,Sequelize);
db.turnos = require('../turnos/model/turnos')(sequelize,Sequelize);
//db.usuario = require('../usuario/model/usuarios')(sequelize,Sequelize);

/* es necesario desde el mas particular al general entonces se necesita hacer belongsto antes de un hasmany */
db.entrada.belongsTo(db.caja, {as: 'caja', foreignKey:'entradas_FK', targetKey:'id_caja', sourceKey:'id_caja'});
db.caja.hasMany(db.entrada, {as: 'entradas', foreignKey:'entradas_FK', targetKey:'id_caja', sourceKey:'id_caja'});




db.sequelize.sync({force:false}).then(() =>  {});

module.exports =  db;

