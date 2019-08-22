/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('permission_user', {
		usuario_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'usuarios',
				key: 'usuario_id'
			}
		},
		permission_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'permissions',
				key: 'permission_id'
			}
		}
	}, {
		tableName: 'permission_user',
		timestamps: false,
		underscored: true
	});
};
