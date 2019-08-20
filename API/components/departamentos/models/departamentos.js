/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('departamentos', {
		depto_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		dpto_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'departamentos'
	});
};
