/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('materias_x_alumno_x_carrera', {
		alumno_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'alumnos',
				key: 'alumno_id'
			}
		},
		materia_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'materias_x_carreras',
				key: 'materia_id'
			}
		},
		carrera_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'materias_x_carreras',
				key: 'carrera_id'
			}
		},
		periodo_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'periodo',
				key: 'periodo_id'
			}
		},
		nota: {
			type: DataTypes.INTEGER(4).UNSIGNED,
			allowNull: false
		},
		fecha_inscripcion: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		cursada_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: true,
			unique: true
		},
		fecha_fin: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		motivo_fin: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'materias_x_alumno_x_carrera'
	});
};
