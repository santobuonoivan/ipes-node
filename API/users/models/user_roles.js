/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_roles', {
		usuario_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'usuarios',
				key: 'usuario_id'
			}
		},
		role_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'roles',
				key: 'role_id'
			}
		}
	}, {
		tableName: 'user_roles',
		timestamps: false,
		underscored: true
	});
};
