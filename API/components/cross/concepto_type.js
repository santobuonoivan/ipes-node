/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('concepto_type', {
		concepto_type_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		concepto: {
			type: DataTypes.STRING(100),
			allowNull: false
		}
	}, {
		tableName: 'concepto_type'
	});
};
