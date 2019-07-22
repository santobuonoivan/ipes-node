/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('turnos', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		m: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		t: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		n: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'turnos'
	});
};
