/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('usuarios', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		apellido: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'apellido'
		},
		nombre: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'nombre'
		},
		dni: {
			type: DataTypes.INTEGER(9),
			allowNull: false,
			field: 'dni'
		},
		clave: {
			type: DataTypes.STRING(20),
			allowNull: false,
			field: 'clave'
		},
		usuario: {
			type: DataTypes.STRING(20),
			allowNull: false,
			field: 'usuario'
		},
		fechadecumpleanios: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'fechadecumpleanios'
		},
		email: {
			type: DataTypes.STRING(70),
			allowNull: false,
			field: 'email'
		},
		perfil: {
			type: DataTypes.STRING(15),
			allowNull: false,
			field: 'perfil'
		},
		turno: {
			type: DataTypes.STRING(15),
			allowNull: false,
			field: 'turno'
		},
		tel: {
			type: DataTypes.STRING(20),
			allowNull: false,
			field: 'tel'
		},
		celular: {
			type: DataTypes.STRING(20),
			allowNull: false,
			field: 'celular'
		},
		direccion1: {
			type: DataTypes.STRING(70),
			allowNull: false,
			field: 'direccion1'
		},
		direccion2: {
			type: DataTypes.STRING(70),
			allowNull: false,
			field: 'direccion2'
		},
		provincia: {
			type: DataTypes.STRING(20),
			allowNull: false,
			field: 'provincia'
		},
		ciudad: {
			type: DataTypes.STRING(20),
			allowNull: false,
			field: 'ciudad'
		},
		codigopostal: {
			type: DataTypes.STRING(10),
			allowNull: false,
			field: 'codigopostal'
		}
	}, {
		tableName: 'usuarios',
		timestamps:false
	});
};
