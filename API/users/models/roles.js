/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('roles', {
		role_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		parent: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: true,
			references: {
				model: 'roles',
				key: 'role_id'
			}
		},
		is_active: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		}
	}, {
		tableName: 'roles',
		timestamps: false,
		underscored: true
	});
};
