const { date } = require("../lib/utils")
const db = require("../config/db.js")

module.exports = {
	all(callback) {
		db.query(`
      SELECT *
      FROM companies`, (err, results) => {
      if (err) throw `Database Error! ${err}`;

      callback(results.rows);
    });
	},
  create(data, callback) {
    const query = `
      INSERT INTO companies (
        name,
        cnpj,
        date_register,
        email,
        phone,
        cep,
        address
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `;

    const values = [
      data.name,
      data.cnpj,
      date(data.date_register).iso,
      data.email,
      data.phone,
      data.cep,
      data.address
    ];

    db.query(query, values, function (err, results) {
      if (err) throw `Database Error! ${err}`;

      callback(results.rows[0]);
    });
  },
  find(id, callback) {
    db.query(`
    SELECT companies.*
    FROM companies
    WHERE companies.id = $1`, [id], (err, results)=>{
      if(err) throw `Database Error! ${err}`

      callback(results.rows[0])
    })
  },
  update(data, callback) {
    const query = `
      UPDATE companies SET
        name=($1),
        cnpj=($2),
        date_register=($3),
        email=($4),
        phone=($5),
        cep=($6),
        address=($7)
      WHERE id = $8
    `;

    const values = [
      data.name,
      data.cnpj,
      date(data.date_register).iso,
      data.email,
      data.phone,
      data.cep,
      data.address,
      data.id
    ];

    db.query(query, values, (err, results) => {
      if (err) throw `Database Error! ${err}`;
      callback();
    });
  },
  delete(id, callback){
    db.query(`DELETE FROM companies WHERE id = $1`, [id], (err,results)=>{
      if(err) throw `Database Error! ${err}`

      return callback()
    })
  },
}