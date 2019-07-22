/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('documentacion', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		titulo: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		dni: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		fotos: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		cert_salud: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		esmatricula: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		escuota: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		escertificacion: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'documentacion'
	});
};
