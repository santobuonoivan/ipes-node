/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('materias', {
		materia_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombre: {
			type: DataTypes.STRING(70),
			allowNull: false
		},
		id_alumno: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false
		}
	}, {
		tableName: 'materias'
	});
};
