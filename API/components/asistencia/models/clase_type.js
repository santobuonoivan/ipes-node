/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('clase_type', {
		clase_type_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		clase_type: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		detalle_type: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'clase_type'
	});
};
