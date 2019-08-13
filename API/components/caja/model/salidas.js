/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('salidas', {
		idSalida: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id_salida'
		},
		usuarioId: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			field: 'usuario_id'
		},
		idCaja: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			references: {
				model: 'caja',
				key: 'id_caja'
			},
			field: 'id_caja'
		},
		importe: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			field: 'importe'
		},
		fechayhora: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'fechayhora'
		},
		detalle: {
			type: DataTypes.STRING(250),
			allowNull: false,
			field: 'detalle'
		}
	}, {
		tableName: 'salidas'
	});
};
