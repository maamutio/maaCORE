'use strict';
module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'Scores',
            { id: { type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true
                },

                score: {type: Sequelize.INTEGER},

                playerId: {
                    type: Sequelize.STRING,
                    unique: true,
                    references: {
                        model: "Users",
                        key: "id"
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL'
                },


                createdAt: { type: Sequelize.DATE,
                    allowNull: false
                },
                updatedAt: { type: Sequelize.DATE,
                    allowNull: false
                }
            },
            { sync: {force: true} }
        );
    },
    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('Scores');
    }
};