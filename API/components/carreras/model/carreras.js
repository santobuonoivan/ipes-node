/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('carreras', {
		id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombre: {
			type: DataTypes.STRING(70),
			allowNull: false
		},
		modalidades: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			references: {
				model: 'modalidades',
				key: 'id'
			}
		},
		turnos: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			references: {
				model: 'turnos',
				key: 'id'
			}
		},
		cantidadanios: {
			type: DataTypes.STRING(250),
			allowNull: false
		}
	}, {
		tableName: 'carreras'
	});
};
