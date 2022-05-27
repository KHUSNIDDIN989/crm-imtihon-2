import { Router } from "express";

import { GET_TEACHER } from "../controllers/teachers.js";

export default Router().get("/teacher", GET_TEACHER);
