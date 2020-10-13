
const controller = require("../controller/logic/program.controller");

module.exports = (app) => {
    app.get("/program", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/program/bycode/:code", (req, res, next) => {
        controller.getByDocument(req, res, next);
    });
    
    app.post("/program", (req, res, next) => {
        controller.createProgram(req, res, next);
    });
    
    app.put("/program", (req, res, next) => {
        controller.updateProgram(req, res, next);
    });
    
    app.delete("/program", (req, res, next) => {
        controller.deleteProgram(req, res, next);
    });
};