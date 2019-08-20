const config =  require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const joi = require('joi');


module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users',
		{
		id: {
			// type: DataTypes.INTEGER(11), for mysql
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		uid: {
			type: DataTypes.STRING(36),
			defaultValue: DataTypes.UUIDV1,
			allowNull: false,
			unique: true
		},
		first_name: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		middle_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		last_name: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		username: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true
		},
		email: {
			type: DataTypes.STRING(191),
			allowNull: false,
			unique: true
		},
		password: {
			type: DataTypes.STRING(191),
			allowNull: false
		},
		address: {
			type: DataTypes.STRING(191),
			allowNull: true
		},
		zip_code: {
			type: DataTypes.STRING(191),
			allowNull: true
		},
		phone: {
			type: DataTypes.STRING(191),
			allowNull: true
		},
		mobile: {
			type: DataTypes.STRING(191),
			allowNull: true
		},
		city: {
			type: DataTypes.STRING(191),
			allowNull: true
		},
		state: {
			type: DataTypes.STRING(191),
			allowNull: true
		},
		country: {
			type: DataTypes.STRING(191),
			allowNull: true
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
		deleted_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	},
		{
			tableName: 'users',
			underscored:true
		}
	);
};


