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

/*
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
// Caja
/*
db.entrada.belongsTo(db.caja, {as: 'caja', foreignKey:'entradas_FK', targetKey:'id_caja', sourceKey:'id_caja'});
db.caja.hasMany(db.entrada, {as: 'entradas', foreignKey:'entradas_FK', targetKey:'id_caja', sourceKey:'id_caja'});
db.salida.belongsTo(db.caja, {as: 'caja', foreignKey:'salidas_FK', targetKey:'id_caja', sourceKey:'id_caja'});
db.caja.hasMany(db.salida, {as: 'salidas', foreignKey:'salidas_FK', targetKey:'id_caja', sourceKey:'id_caja'});
*/

// Alumno
/*
db.cuota.belongsTo(db.alumno, {as: 'alumno', foreignKey:'cuotas_alumno_FK', targetKey:'id', sourceKey:'id_alumno'});
db.alumno.hasMany(db.cuota, {as: 'cuotas', foreignKey:'cuotas_alumno_FK', targetKey:'id_alumno', sourceKey:'id'});

db.pagos.belongsTo(db.alumno, {as: 'alumno', foreignKey:'pagos_alumno_FK', targetKey:'id', sourceKey:'id_alumno'});
db.alumno.hasMany(db.pagos, {as: 'pagos', foreignKey:'pagos_alumno_FK', targetKey:'id_alumno', sourceKey:'id'});

db.notas.belongsTo(db.alumno, {as: 'alumno', foreignKey:'notas_alumno_FK', targetKey:'id', sourceKey:'id_alumno'});
db.alumno.hasMany(db.notas, {as: 'notas', foreignKey:'notas_alumno_FK', targetKey:'id_alumno', sourceKey:'id'});

db.carrera.belongsTo(db.alumno, {as: 'alumno', foreignKey:'alumnos_carreras_FK', targetKey:'id_carrera', sourceKey:'id'});
db.alumno.hasMany(db.carrera, {as: 'carrera', foreignKey:'alumnos_carreras_FK', targetKey:'id', sourceKey:'id_carrera'});

db.documentacion.belongsTo(db.alumno, {as: 'alumno', foreignKey:'alumnos_documentacion_FK', targetKey:'id_documentacion', sourceKey:'id'});
db.alumno.belongsTo(db.documentacion, {as: 'documentacion', foreignKey:'alumnos_documentacion_FK', targetKey:'id', sourceKey:'id_documentacion'});
*/




db.sequelize.sync({force:false}).then(() =>  {});

module.exports =  db;

