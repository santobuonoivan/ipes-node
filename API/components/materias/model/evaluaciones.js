/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('evaluaciones', {
		evaluacion_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		cursada_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'materias_x_alumno_x_carrera',
				key: 'cursada_id'
			}
		},
		eval_type_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: true,
			references: {
				model: 'eval_type',
				key: 'eval_type_id'
			}
		},
		nota: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: true
		},
		observaciones: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		fecha: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'evaluaciones'
	});
};
