const Sequelize = require("sequelize");
const {models} = require("../models");

//GET /Scores

exports.index =  (req, res, next) => {

    try {
        const {user} = req.load;

        res.render('scores/index',{user});
    } catch (error) {
        next(error);
    }

}