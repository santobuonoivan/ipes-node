/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('notas', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		id_alumno: {
			type: DataTypes.INTEGER(9),
			allowNull: false
		},
		id_materia: {
			type: DataTypes.INTEGER(11),
			allowNull: false
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
		tableName: 'notas',
		timestamps:false

	});
};
