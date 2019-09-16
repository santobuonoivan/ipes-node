/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		usuario_id: {
			type: DataTypes.INTEGER(9).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		apellido: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		nombre: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		dni: {
			type: DataTypes.INTEGER(9),
			allowNull: false
		},
		clave: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		usuario: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		fechadecumpleanios: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(70),
			allowNull: false
		},
		perfil: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		turno: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		tel: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		celular: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		direccion1: {
			type: DataTypes.STRING(70),
			allowNull: false
		},
		direccion2: {
			type: DataTypes.STRING(70),
			allowNull: false
		},
		provincia: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		ciudad: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		country: {
			type: DataTypes.STRING(191),
			allowNull: true
		},
		codigopostal: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		is_active: {
			// type: DataTypes.INTEGER(4), for mysql
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '1'
		},
		profile_image: {
			type: DataTypes.STRING(191),
			allowNull: true
		},
	}, {
		tableName: 'usuarios',
		timestamps: false,
		underscored: true
	});
};
