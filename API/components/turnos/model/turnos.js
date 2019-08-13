/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('turnos', {
		id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		m: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'm'
		},
		t: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 't'
		},
		n: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'n'
		}
	}, {
		tableName: 'turnos'
	});
};
