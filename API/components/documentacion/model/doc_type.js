/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('doc_type', {
		doc_type_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		type_name: {
			type: DataTypes.STRING(100),
			allowNull: false
		}
	}, {
		tableName: 'doc_type'
	});
};
