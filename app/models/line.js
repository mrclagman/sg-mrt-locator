const sql = require("./db.js");

// constructor
const Line = function(line) {
  this.name = line.name;
  this.line = line.line_code;
};


Line.findByCode = (lineCode, result) => {
    console.log(lineCode);
    sql.query(`SELECT name,line_code FROM train_lines WHERE line_code = "${lineCode}"`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found line: ", res);
        result(null, res);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };


  Line.getAll = result => {
    sql.query("SELECT name,line_code FROM train_lines", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("train_lines: ", res);
      result(null, res);
    });
  };


  module.exports = Line;