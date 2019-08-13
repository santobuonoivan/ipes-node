/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pagos', {
		id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		idAlumno: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			references: {
				model: 'alumnos',
				key: 'id'
			},
			field: 'id_alumno'
		},
		concepto: {
			type: DataTypes.STRING(15),
			allowNull: false,
			field: 'concepto'
		},
		fecha: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'fecha'
		},
		importe: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'importe'
		},
		pasada: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'pasada'
		}
	}, {
		tableName: 'pagos',
		timestamps:false
	});
};
