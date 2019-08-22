/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('permission_role', {
		permission_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'permissions',
				key: 'permission_id'
			}
		},
		role_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: true,
			references: {
				model: 'roles',
				key: 'role_id'
			}
		}
	}, {
		tableName: 'permission_role',
		timestamps: false,
		underscored: true
	});
};
