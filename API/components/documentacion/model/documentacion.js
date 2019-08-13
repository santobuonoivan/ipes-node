/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('documentacion', {
		id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		titulo: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'titulo'
		},
		dni: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'dni'
		},
		fotos: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'fotos'
		},
		certSalud: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'cert_salud'
		},
		esmatricula: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'esmatricula'
		},
		escuota: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'escuota'
		},
		escertificacion: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'escertificacion'
		}
	}, {
		tableName: 'documentacion'
	});
};
