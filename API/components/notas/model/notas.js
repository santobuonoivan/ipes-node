/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('notas', {
		id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_alumno: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			references: {
				model: 'alumnos',
				key: 'id'
			}
		},
		id_materia: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			references: {
				model: 'materias',
				key: 'id'
			}
		},
		nota: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		fecha: {
			type: DataTypes.DATEONLY,
			allowNull: false
		}
	}, {
		tableName: 'notas'
	});
};
