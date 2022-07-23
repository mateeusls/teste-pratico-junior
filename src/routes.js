const express = require("express")
const routes = express.Router()

const userController = require("./app/controllers/user")
const companyController = require("./app/controllers/company")

routes.get("/", (req, res) => { res.render('Home') })

routes.get("/users", userController.index)


routes.get("/companies", companyController.index)


module.exports = routes