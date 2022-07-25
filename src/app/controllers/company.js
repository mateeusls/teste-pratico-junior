const { date, phoneFormatted, cepFormatted, cnpjFormatted } = require("../lib/utils")
const Companies = require("../models/Companies")

module.exports = {
	index(req, res) {
		Companies.all((companies) => {
      return res.render("Companies", { companies })
		})
	},
	create(req, res) {
    res.render("company/Create");
  },
	post(req, res) {
		const keys = Object.keys(req.body);
    // Para cada chave do form que estiver vazio, retorna um atencion.
    for (let key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields!");
      }
    }
    Companies.create(req.body, (company) => {
      return res.redirect(`/companies/${company.id}`);
    });
  },
  edit(req, res) {
    Companies.find(req.params.id, (company) => {
      if (!company) return res.send("Company not found!");

      company.date_register = date(company.date_register).iso

      res.render(`company/Edit`, { company });
    });
  },
  put(req, res) {
    const keys = Object.keys(req.body);
    // Para cada chave do form que estiver vazio, retorna um atencion.
    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields!");
      }
    }

    Companies.update(req.body, () => {
      return res.redirect(`companies/${req.body.id}`);
    });
  },
  show(req, res) {
    Companies.find(req.params.id, (company) => {
      if (!company) return res.send("Company not found!");

      company.date_register = date(company.date_register).format
      company.phone = phoneFormatted(company.phone)
      company.cnpj = cnpjFormatted(company.cnpj)
      company.cep = cepFormatted(company.cep)

      res.render(`company/Show`, { company });
    });
  },
  delete (req, res) {
    Companies.delete(req.body.id, () => {
      return res.redirect(`/companies`)
    })
  }
}