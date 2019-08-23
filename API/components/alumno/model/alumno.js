/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('alumnos', {
		alumno_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		dni: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false
		},
		nombre: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		apellido: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		sexo: {
			type: DataTypes.STRING(5),
			allowNull: false
		},
		legajo: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		id_carrera: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: true
		},
		fechadeinscripcion: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		modalidad: {
			type: DataTypes.STRING(5),
			allowNull: false
		},
		turno: {
			type: DataTypes.STRING(5),
			allowNull: false
		},
		anio_carrera: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		activo: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		fechadenacimiento: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		direccion: {
			type: DataTypes.STRING(70),
			allowNull: false
		},
		tel: {
			type: DataTypes.STRING(25),
			allowNull: true
		},
		celular: {
			type: DataTypes.STRING(25),
			allowNull: true
		},
		estadocivil: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		secundario: {
			type: DataTypes.STRING(70),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(70),
			allowNull: false
		},
		facebook: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		trabajo: {
			type: DataTypes.STRING(70),
			allowNull: true
		},
		conocio: {
			type: DataTypes.STRING(250),
			allowNull: true
		},
		promo: {
			type: DataTypes.STRING(250),
			allowNull: true
		}
	}, {
		tableName: 'alumnos',
		underscored: true,
		timestamps: false
	});
};
