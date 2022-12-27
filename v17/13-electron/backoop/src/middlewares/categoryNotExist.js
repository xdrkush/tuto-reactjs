const Category = require('../models/CategoryModel')

exports.categoryNotExist = (req, res ,next) => {
    Category.find({name: req.body.name})
    next()
}

