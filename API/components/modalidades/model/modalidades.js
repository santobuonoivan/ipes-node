/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('modalidades', {
		id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		p: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'p'
		},
		sp: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'sp'
		},
		v: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'v'
		}
	}, {
		tableName: 'modalidades',
		timestamps:false
	});
};
