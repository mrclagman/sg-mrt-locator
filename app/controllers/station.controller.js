const Station = require("../models/station.js");


// Retrieve all Stations from the database.
exports.getAll = (req, res) => {
    Station.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving stations."
          });
        else res.send(data);
      });
};

// Find a single Staton with a name
exports.findOne = (req, res) => {
    Station.findByName(req.params.name, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Station with name ${req.params.name}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Station with name " + req.params.name
            });
          }
        } else res.send(data);
      });
};