/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('carreras', {
		id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		nombre: {
			type: DataTypes.STRING(70),
			allowNull: false,
			field: 'nombre'
		},
		modalidades: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			references: {
				model: 'modalidades',
				key: 'id'
			},
			field: 'modalidades'
		},
		turnos: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			references: {
				model: 'turnos',
				key: 'id'
			},
			field: 'turnos'
		},
		cantidadanios: {
			type: DataTypes.STRING(250),
			allowNull: false,
			field: 'cantidadanios'
		}
	}, {
		tableName: 'carreras'
	});
};
