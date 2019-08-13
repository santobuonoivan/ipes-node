/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('notas', {
		id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			field: 'id'
		},
		idAlumno: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			references: {
				model: 'alumnos',
				key: 'id'
			},
			field: 'id_alumno'
		},
		idMateria: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			references: {
				model: 'materias',
				key: 'id'
			},
			field: 'id_materia'
		},
		nota: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'nota'
		},
		fecha: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'fecha'
		}
	}, {
		tableName: 'notas'
	});
};
