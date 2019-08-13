/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('alumnos', {
		id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		dni: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			field: 'dni'
		},
		nombre: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'nombre'
		},
		apellido: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'apellido'
		},
		sexo: {
			type: DataTypes.STRING(5),
			allowNull: false,
			field: 'sexo'
		},
		legajo: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'legajo'
		},
		idCarrera: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: true,
			references: {
				model: 'carreras',
				key: 'id'
			},
			field: 'id_carrera'
		},
		fechadeinscripcion: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'fechadeinscripcion'
		},
		modalidad: {
			type: DataTypes.STRING(5),
			allowNull: false,
			field: 'modalidad'
		},
		turno: {
			type: DataTypes.STRING(5),
			allowNull: false,
			field: 'turno'
		},
		anioCarrera: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'anio_carrera'
		},
		activo: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			field: 'activo'
		},
		fechadenacimiento: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'fechadenacimiento'
		},
		direccion: {
			type: DataTypes.STRING(70),
			allowNull: false,
			field: 'direccion'
		},
		tel: {
			type: DataTypes.STRING(25),
			allowNull: true,
			field: 'tel'
		},
		celular: {
			type: DataTypes.STRING(25),
			allowNull: true,
			field: 'celular'
		},
		estadocivil: {
			type: DataTypes.STRING(30),
			allowNull: true,
			field: 'estadocivil'
		},
		secundario: {
			type: DataTypes.STRING(70),
			allowNull: false,
			field: 'secundario'
		},
		email: {
			type: DataTypes.STRING(70),
			allowNull: false,
			field: 'email'
		},
		facebook: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'facebook'
		},
		trabajo: {
			type: DataTypes.STRING(70),
			allowNull: true,
			field: 'trabajo'
		},
		idDocumentacion: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: true,
			references: {
				model: 'documentacion',
				key: 'id'
			},
			field: 'id_documentacion'
		},
		conocio: {
			type: DataTypes.STRING(250),
			allowNull: false,
			field: 'conocio'
		},
		promo: {
			type: DataTypes.STRING(250),
			allowNull: false,
			field: 'promo'
		}
	}, {
		tableName: 'alumnos',
		timestamps:false
	});
};
