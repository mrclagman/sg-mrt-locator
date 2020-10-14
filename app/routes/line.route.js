module.exports = app => {
    const line = require("../controllers/line.controller.js");
  
    // Create a new Customer
    // app.post("/customers", customers.create);
  
    // Retrieve all Lines
    app.get("/line", line.getAll);
  
    // Retrieve a single Line with line code
    app.get("/line/:code", line.findOne);
  
  };