/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('materias_x_carreras', {
		carrera_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'carreras',
				key: 'carrera_id'
			}
		},
		materia_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'materias',
				key: 'materia_id'
			}
		},
		depto_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: true,
			references: {
				model: 'departamentos',
				key: 'depto_id'
			}
		},
		anio_carrera: {
			type: DataTypes.INTEGER(2).UNSIGNED,
			allowNull: true
		}
	}, {
		tableName: 'materias_x_carreras'
	});
};
