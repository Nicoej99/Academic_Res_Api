/** packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    { extended: true }
);

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getIpAddress");
app.use("*", ipFn);

/** Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome to academic rest api.");
});

// User Routes
const userRoutes = require("./routes/user.routes");
userRoutes(app);

// token Middleware
tkFn = require("./middleware/verifyToken")
app.use(tkFn)

// Student Routes
const studentRoutes = require("./routes/student.routes");
studentRoutes(app);

// Teacher Routes
const teacherRoutes = require("./routes/teacher.routes");
teacherRoutes(app);

// Period Routes
const periodRoutes = require("./routes/period.routes");
periodRoutes(app);

// Course Routes
const courseRoutes = require("./routes/course.routes");
courseRoutes(app);

// Group Routes
const groupRoutes = require("./routes/group.routes");
groupRoutes(app);

// Faculty Routes
const facultyRoutes = require("./routes/faculty.routes");
facultyRoutes(app);

// Program Routes
const programRoutes = require("./routes/program.routes");
programRoutes(app);

app.listen(port, () => {
    console.log("Server is running...")
});