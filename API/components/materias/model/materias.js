/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('materias', {
		id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		idCarrera: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			references: {
				model: 'carreras',
				key: 'id'
			},
			field: 'id_carrera'
		},
		nombre: {
			type: DataTypes.STRING(70),
			allowNull: false,
			field: 'nombre'
		}
	}, {
		tableName: 'materias'
	});
};
