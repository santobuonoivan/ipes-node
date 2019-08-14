/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('entradas', {
		id_entrada: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		usuario_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false
		},
		id_caja: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			references: {
				model: 'caja',
				key: 'id_caja'
			}
		},
		importe: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		fechayhora: {
			type: DataTypes.DATE,
			allowNull: false
		},
		detalle: {
			type: DataTypes.STRING(250),
			allowNull: false
		}
	}, {
		tableName: 'entradas'
	});
};
