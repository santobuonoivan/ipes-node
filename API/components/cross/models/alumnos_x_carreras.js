/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('alumnos_x_carreras', {
		alumno_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'alumnos',
				key: 'alumno_id'
			}
		},
		carrera_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'carreras',
				key: 'carrera_id'
			}
		}
	}, {
		tableName: 'alumnos_x_carreras'
	});
};
