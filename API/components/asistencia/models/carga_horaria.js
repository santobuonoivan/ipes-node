/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('carga_horaria', {
		carga_horaria_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		fecha_cursada: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		clase_type_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: true,
			references: {
				model: 'clase_type',
				key: 'clase_type_id'
			}
		},
		nota: {
			type: DataTypes.INTEGER(4).UNSIGNED,
			allowNull: true
		}
	}, {
		tableName: 'carga_horaria'
	});
};
