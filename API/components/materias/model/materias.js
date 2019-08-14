/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('materias', {
		id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_carrera: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			references: {
				model: 'carreras',
				key: 'id'
			}
		},
		nombre: {
			type: DataTypes.STRING(70),
			allowNull: false
		}
	}, {
		tableName: 'materias'
	});
};
