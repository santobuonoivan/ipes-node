/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dependencies', {
		materia_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'materias',
				key: 'materia_id'
			}
		},
		dependency: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'dependencies'
	});
};
