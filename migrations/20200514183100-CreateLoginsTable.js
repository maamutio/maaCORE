'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Logins',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true,
                },
                userId: {
                    type: Sequelize.STRING,
                    unique: true,
                    references: {
                        model: "Users",
                        key: "id"
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                },
                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                }
            },
            {
                sync: {force: true}
            }
        );
    },
    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('Logins');
    }
};