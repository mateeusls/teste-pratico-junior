const db = require("../config/db.js")

module.exports = {
	all(callback) {
		db.query(`
      SELECT *
      FROM users`, (err, results) => {
      if (err) throw `Database Error! ${err}`;

      callback(results.rows);
    });
	}
}