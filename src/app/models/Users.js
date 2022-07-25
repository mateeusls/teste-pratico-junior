const db = require("../config/db.js")

module.exports = {
	all(callback) {
		db.query(`
      SELECT *
      FROM users`, (err, results) => {
      if (err) throw `Database Error! ${err}`;

      callback(results.rows);
    });
	},
  async create(data, callback) {
    const query = `
      INSERT INTO users (
        name,
        email,
        password,
        password_confirm
      ) VALUES ($1, $2, $3, $4)
      RETURNING id, email
    `;

    const values = [
      data.name,
      data.email,
      data.password,
      data.password_confirm
    ];

    db.query(query, values, function(err, results) {
      if (err) throw `Database Error! ${err}`;

      callback(results.rows[0]);
    });
  },
  find(id, callback) {
    db.query(`
    SELECT users.*
    FROM users
    WHERE users.id = $1`, [id], (err, results)=>{
      if(err) throw `Database Error! ${err}`

      callback(results.rows[0])
    })
  },
  update(data, callback) {
    const query = `
      UPDATE users SET
        name=($1),
        email=($2),
        password=($3),
        password_confirm=($4)
      WHERE id = $5
    `;

    const values = [
      data.name,
      data.email,
      data.password,
      data.password_confirm,
      data.id
    ];

    db.query(query, values, (err, results) => {
      if (err) throw `Database Error! ${err}`;
      callback();
    });
  },
  delete(id, callback){
    db.query(`DELETE FROM users WHERE id = $1`, [id], (err,results)=>{
      if(err) throw `Database Error! ${err}`

      return callback()
    })
  },
}