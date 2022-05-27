import { Router } from "express";
import { GET_COURSES, POST_COURSES } from "../controllers/courses.js";

export default Router()
  .get("/courses", GET_COURSES)
  .post("/courses", POST_COURSES);
