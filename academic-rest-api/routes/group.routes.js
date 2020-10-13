
const controller = require("../controller/logic/group.controller");

module.exports = (app) => {
    app.get("/group", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/group/bycode/:code", (req, res, next) => {
        controller.getByDocument(req, res, next);
    });
    
    app.post("/group", (req, res, next) => {
        controller.createGroup(req, res, next);
    });
    
    app.put("/group", (req, res, next) => {
        controller.updateGroup(req, res, next);
    });
    
    app.delete("/group", (req, res, next) => {
        controller.deleteGroup(req, res, next);
    });
};