const express = require('express');
const morgan = require('morgan');
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
var alumnRoutes = require('./components/alumno/router/alumno');
var cajaRoutes = require('./components/caja/router/caja');
var carrerasRoutes = require('./components/carreras/router/carrera');
var cuotasRoutes = require('./components/cuotas/router/cuotas');
/*
var userPermissions = require('./users/routes/UserPermissionsRoutes');
var clientsRoutes = require('./components/clients/routes/clientsRoutes');
var locationsRoutes = require('./components/locations/routes/locationsRoutes');
var sectorRoutes = require('./components/sector/routes/sectorRoutes');
var sensorTypesRoutes = require('./components/sensorTypes/routes/sensorTypesRoutes');
var sensorsRoutes = require('./components/sensors/routes/sensorsRoutes');
var alarmRulesRoutes = require('./components/alarmsRules/routes/alarmRulesRoutes');

var homeScreen = require('./components/graphicComponents/homeScreen/homeScreeRoutes');
*/


app.use('/alumn', alumnRoutes);
app.use('/caja',cajaRoutes);
app.use('/carrera', carrerasRoutes);
app.use('/cuotas', cuotasRoutes);
/*
app.use('/userroles', userRolerRoutes);
app.use('/userpermissions', userPermissions);
app.use('/clients', clientsRoutes);
app.use('/locations', locationsRoutes);
app.use('/sectors', sectorRoutes);
app.use('/sensortypes', sensorTypesRoutes);
app.use('/sensors', sensorsRoutes);
app.use('/homescreen', homeScreen);
app.use('/alarmrules', alarmRulesRoutes);

 */

app.listen(port, function () {
    console.log(`application up and running on port: ${port}`);
});