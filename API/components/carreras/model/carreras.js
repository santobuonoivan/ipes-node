/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('carreras', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombre: {
			type: DataTypes.STRING(70),
			allowNull: false
		},
		modalidades: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		turnos: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		cantidadanios: {
			type: DataTypes.STRING(250),
			allowNull: false
		}
	}, {
		tableName: 'carreras'
	});
};
