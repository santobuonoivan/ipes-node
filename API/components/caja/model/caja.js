/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('caja', {
		idCaja: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id_caja'
		},
		usuarioId: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			field: 'usuario_id'
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
		},
		idComienzoEntrada: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: true,
			field: 'id_comienzo_entrada'
		},
		idFinEntrada: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: true,
			field: 'id_fin_entrada'
		},
		idComienzoSalida: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: true,
			field: 'id_comienzo_salida'
		},
		idFinSalida: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: true,
			field: 'id_fin_salida'
		}
	}, {
		tableName: 'caja',
		timestamps:false
	});
};
