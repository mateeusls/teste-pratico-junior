const User = require("../models/Users")

module.exports = {
	index(req, res) {
		User.all((users) => {
			return res.render("Users", { users })
		})
	}
}