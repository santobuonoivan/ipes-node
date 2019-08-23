/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pagos', {
		id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		alumno_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			references: {
				model: 'alumnos',
				key: 'alumno_id'
			}
		},
		concepto: {
			type: DataTypes.STRING(15),
			allowNull: false
		},
		fecha: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		importe: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		fecha_pasada: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'pagos',
		underscored: true,
		timestamps: false
	});
};
