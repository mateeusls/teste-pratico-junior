const User = require("../models/Users")

const emails = [
  "email1@suportegerencial.com.br", 
  "email2@suportegerencial.com.br", 
  "email3@suportegerencial.com.br"
]

module.exports = {
	index(req, res) {
		User.all((users) => {
			return res.render("Users", { users })
		})
	},
	create(req, res) {
    res.render("user/Create");
  },
	post(req, res) {
    const data = req.body
    const keys = Object.keys(data);
    for (let key of keys) {
      if (data[key] == "") {
        return res.send(`Please, fill the ${key}`)
      } 
    }
    const { email, password, password_confirm } = data

    for(let mail of emails){
      if(mail == email){
        return res.send("Email is cannot used")
      } else if (password != password_confirm) {
        return res.send("Password not match")
      }
    }

    User.create(req.body, (user) => {
      return res.redirect(`/users/${user.id}`);
    });
  },
  edit(req, res) {
    User.find(req.params.id, (user) => {
      if (!user) return res.send("User not found!");

      res.render(`user/Edit`, { user });
    });
  },
  put(req, res) {
    const data = req.body
    const keys = Object.keys(data);
    for (let key of keys) {
      if (data[key] == "") {
        return res.send(`Please, fill the ${key}`)
      } 
    }

    const { email, password, password_confirm } = data

    for(let mail of emails){
      if(mail == email){
        return res.send("Email is cannot used")
      } else if (password != password_confirm) {
        return res.send("Password not match")
      }
    }

    User.update(req.body, () => {
      return res.redirect(`users/${req.body.id}`);
    });
  },
  show(req, res) {
    User.find(req.params.id, (user) => {
      if (!user) return res.send("User not found!");

      res.render(`user/Show`, { user });
    });
  },
  delete (req, res) {
    User.delete(req.body.id, () => {
      return res.redirect(`/users`)
    })
  }
}