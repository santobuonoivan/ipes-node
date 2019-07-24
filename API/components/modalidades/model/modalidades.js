/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('modalidades', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		p: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		sp: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		v: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'modalidades',
		timestamps:false

	});
};
