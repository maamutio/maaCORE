const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Score extends Model {}
    Score.init({
            score: { type: DataTypes.INTEGER }
        },
        { sequelize }
    );
    return Score;
};