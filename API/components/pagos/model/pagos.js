/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pagos', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_alumno: {
			type: DataTypes.INTEGER(9),
			allowNull: false
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
		pasada: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'pagos'
	});
};
