/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('movimientos', {
		id_operacion: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		usuario_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'caja',
				key: 'usuario_id'
			}
		},
		id_caja: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
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
		},
		movimiento_type_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			references: {
				model: 'movimientos_types',
				key: 'movimiento_type_id'
			}
		}
	}, {
		tableName: 'movimientos'
	});
};
