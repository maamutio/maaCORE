const Sequelize = require("sequelize");
const {models} = require("../models");

//GET /logins

exports.index = async (req, res, next) => {

    try {
        const logins = await models.Login.findAll({
            include: [
                {model: models.User, as:"user"}
            ]
        });
        res.render('logins/index',{logins});
    } catch (error) {
        next(error);
    }

}

exports.create = async (req, res, next) => {

    try{
        await models.Login.create({userId: req.loginUser.id});
        next();
    } catch(e){
        next(e);
    }
}