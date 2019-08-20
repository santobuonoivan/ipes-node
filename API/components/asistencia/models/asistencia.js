/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('asistencia', {
		carga_horaria_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: true,
			references: {
				model: 'carga_horaria',
				key: 'carga_horaria_id'
			}
		},
		cursada_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: true,
			references: {
				model: 'materias_x_alumno_x_carrera',
				key: 'cursada_id'
			}
		},
		asistencia_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'asistencia'
	});
};
