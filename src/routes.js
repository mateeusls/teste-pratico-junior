const express = require("express")
const routes = express.Router()

const userController = require("./app/controllers/user")
const companyController = require("./app/controllers/company")

routes.get("/", (req, res) => { res.render('Home') })

routes.get("/users", userController.index)
routes.get("/users/create", userController.create)
routes.get("/users/:id", userController.show)
routes.get("/users/:id/edit", userController.edit)

routes.get("/companies", companyController.index)
routes.get("/companies/create", companyController.create)
routes.get("/companies/:id", companyController.show)
routes.get("/companies/:id/edit", companyController.edit)

routes.post("/companies", companyController.post)
routes.put("/companies", companyController.put)
routes.delete("/companies", companyController.delete)

routes.post("/users", userController.post)
routes.put("/users", userController.put)
routes.delete("/users", userController.delete)


module.exports = routes