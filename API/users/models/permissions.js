/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('permissions', {
		permission_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		module: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		action: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'permissions',
		timestamps: false,
		underscored: true
	});
};
