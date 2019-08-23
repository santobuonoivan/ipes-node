const express = require('express');
const morgan = require('morgan');
//const cors = require('./Auth/cors'); TODO modificar cors manual
const cors = require('cors');
const env = require('dotenv').config();
//const authMiddleware = require('./middleware/auth');
//const authorization = require('./middleware/authorization');
//Settings
const port = process.env.NODE_PORT || 3000;
const app = express();
const db = require('./components/db/db.mariadb.config');

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
//app.use(express.static('./public'));

// Routes
var authRouter = require('./Auth/AuthRoutes');
var userRoutes = require('./users/routes/UserRoutes');
var rolesRoutes = require('./users/routes/RoleRoutes');
var permissionsRoutes = require('./users/routes/PermissionsRoutes');
var userRolerRoutes = require('./users/routes/UserRolesRoutes');
var userPermissions = require('./users/routes/UserPermissionsRoutes');
var alumnRoutes = require('./components/alumno/router/alumno');
var cajaRoutes = require('./components/caja/router/caja');
/*
var carrerasRoutes = require('./components/carreras/router/carrera');
 */
var cuotasRoutes = require('./components/cuotas/router/cuotas');
var materiasRoutes = require('./components/materias/router/materia');

/*
var clientsRoutes = require('./components/clients/routes/clientsRoutes');
var locationsRoutes = require('./components/locations/routes/locationsRoutes');
var sectorRoutes = require('./components/sector/routes/sectorRoutes');
var sensorTypesRoutes = require('./components/sensorTypes/routes/sensorTypesRoutes');
var sensorsRoutes = require('./components/sensors/routes/sensorsRoutes');
var alarmRulesRoutes = require('./components/alarmsRules/routes/alarmRulesRoutes');

var homeScreen = require('./components/graphicComponents/homeScreen/homeScreeRoutes');
*/

app.use('/users', userRoutes);
app.use('/auth',authRouter);
app.use('/roles', rolesRoutes);
app.use('/permissions', permissionsRoutes);
app.use('/userroles', userRolerRoutes);
app.use('/userpermissions', userPermissions);
app.use('/alumn', alumnRoutes);

/* TODO  se impleenta en los insert de alumno */
//app.use('/documentacion', documentacionRoutes);

app.use('/caja',cajaRoutes);
/*

app.use('/cuotas', cuotasRoutes);
 app.use('/pagos', pagosRoutes); */
/*
app.use('/carrera', carrerasRoutes);
//app.use('/modalidades', modalidadesRoutes);
//app.use('/turnos', sectorRoutes);

app.use('/materias', materiasRoutes);
*/
//app.use('/notas', notassRoutes);

//app.use('/usuarios', usuariosRoutes);


app.listen(port, function () {
    console.log(`application up and running on port: ${port}`);
});