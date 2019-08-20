/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('periodo', {
		periodo_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		periodo_type: {
			type: DataTypes.STRING(100),
			allowNull: false
		}
	}, {
		tableName: 'periodo'
	});
};
