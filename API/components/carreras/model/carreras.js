/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('carreras', {
		carrera_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombre: {
			type: DataTypes.STRING(70),
			allowNull: false
		},
		mod_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			references: {
				model: 'modalidades',
				key: 'mod_id'
			}
		},
		turno_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			references: {
				model: 'turnos',
				key: 'turno_id'
			}
		},
		cantidadanios: {
			type: DataTypes.STRING(250),
			allowNull: false
		}
	}, {
		tableName: 'carreras',
		underscored: true,
		timestamps: false
	});
};
