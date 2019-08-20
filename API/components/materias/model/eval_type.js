/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('eval_type', {
		eval_type_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		type_name: {
			type: DataTypes.STRING(100),
			allowNull: false
		}
	}, {
		tableName: 'eval_type'
	});
};
