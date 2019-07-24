/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('materias', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_carrera: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		nombre: {
			type: DataTypes.STRING(70),
			allowNull: false
		}
	}, {
		tableName: 'materias',
		timestamps:false

	});
};
