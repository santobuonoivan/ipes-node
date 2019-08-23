/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('documentacion', {
		documentacion_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		alumno_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'alumnos',
				key: 'alumno_id'
			}
		},
		fecha_alta: {
			type: DataTypes.DATE,
			allowNull: true
		},
		doc_type_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			references: {
				model: 'doc_type',
				key: 'doc_type_id'
			}
		}
	}, {
		tableName: 'documentacion',
		underscored: true,
		timestamps: false
	});
};
