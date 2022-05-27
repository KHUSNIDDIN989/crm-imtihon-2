import express from "express";
import path from "path";
import { cwd } from "process";

// PORT IMPORTED
import { PORT } from "../config.js";
import model from "./middlewares/model.js";

// ROUTES IMPORTED
import adminRoutes from "./routes/admin.routes.js";
import studentsRoutes from "./routes/students.routes.js";
import groupsRoutes from "./routes/groups.routes.js";
import teachersRoutes from "./routes/teachers.routes.js";
import coursesRoutes from "./routes/courses.routes.js";

// express
const app = express();
app.use(express.json());
app.use(model);

// settings
app.use(express.static(path.join(cwd(), "src/public")));
app.set("view engine", "ejs");
app.set("views", cwd() + "/src/views/");
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", adminRoutes);
app.use("/", studentsRoutes);
app.use("/", groupsRoutes);
app.use("/", teachersRoutes);
app.use("/", coursesRoutes);

// else page not found
app.use("/", (req, res) => res.status(404).json("page not found"));

app.use((err, req, res, next) => {
  console.log(err);
});
// PORT RUNENG
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
