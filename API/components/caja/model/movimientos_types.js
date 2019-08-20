/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('movimientos_types', {
		movimiento_type_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cuenta_type: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		internal_code: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		cuenta_contable: {
			type: DataTypes.STRING(100),
			allowNull: false
		}
	}, {
		tableName: 'movimientos_types'
	});
};
