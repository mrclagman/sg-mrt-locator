const Line = require("../models/line.js");


// Retrieve all Stations from the database.
exports.getAll = (req, res) => {
    Line.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving line details."
          });
        else res.send(data);
      });
};

// Find a single Staton with a name
exports.findOne = (req, res) => {
    Line.findByCode(req.params.code, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Line with name ${req.params.code}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Line with name " + req.params.code
            });
          }
        } else res.send(data);
      });
};