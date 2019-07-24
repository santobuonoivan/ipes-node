const {username,password,database,host,port,dialect, pool} = require('./mariadb.config')[process.env.NODE_ENV];

const Sequelize = require('sequelize');
'postgres://user:pass@example.com:5432/dbname'
/*
const sequelize = new Sequelize(database,username,password,{
    host:host,
    dialect:dialect,
    port:port,
    logging: function () {},
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        paranoid: true
    }
});
*/
let uri = `${dialect}://${username}:${password}@${host}:${port}/${database}`;
var sequelize = new Sequelize(uri);

sequelize.authenticate().then(function(errors) { console.log(errors) });

/*

const db ={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuario = require('../usuario/model/usuarios')(sequelize,Sequelize);
/*
db.alumno = require('../alumno/model/alumno')(sequelize,Sequelize);
db.caja = require('../caja/model/caja')(sequelize,Sequelize);
db.entrada = require('../caja/model/entradas')(sequelize,Sequelize);
db.salida = require('../caja/model/salidas')(sequelize,Sequelize);
db.carrera = require('../carreras/model/carreras')(sequelize,Sequelize);
db.cuotas = require('../cuotas/model/cuotas')(sequelize,Sequelize);
db.documentacion = require('../documentacion/model/documentacion')(sequelize,Sequelize);
db.materias = require('../materias/model/materias')(sequelize,Sequelize);
db.modalidades = require('../modalidades/model/modalidades')(sequelize,Sequelize);
db.notas = require('../notas/model/notas')(sequelize, Sequelize);
db.pagos = require('../pagos/model/pagos')(sequelize,Sequelize);
db.turnos = require('../turnos/model/turnos')(sequelize,Sequelize);
*/


/*

db.sequelize.sync({force:false}).then(() =>  {
});

module.exports =  db;
*/
