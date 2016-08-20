"use strict";

module.exports = function(sequelize, DataTypes) {

	var burger = sequelize.define( "burger", {
		name: DataTypes, STRING,
		devour: { type: DataTypes.BOOLEAN, defaultValue: false}
	}, {
		underscored: true,
		freezeTableName: true,
		tableName: 'burgers',

		classMethods: {
			associate: function(models) {
				burgers.belongsTo(models.User, {
					onDelete: "CASCADE",
					foreign: {
						allowNull: false
					}
				})
			}
		}
	});

	return burgers;
};


