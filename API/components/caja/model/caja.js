/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caja', {
		id_caja: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		usuario_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false
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
		},
		id_comienzo_entrada: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: true
		},
		id_fin_entrada: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: true
		},
		id_comienzo_salida: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: true
		},
		id_fin_salida: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: true
		}
	}, {
		tableName: 'caja'
	});
};
