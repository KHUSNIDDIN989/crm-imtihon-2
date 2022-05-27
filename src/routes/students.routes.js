import { Router } from "express";
import {
  GET_STUDENTS,
  POST_STUDENTS,
  DELETE_STUDENTS,
  GET,
} from "../controllers/students.js";
import studentMiddlewar from "../middlewares/studentsMiddlewar.js";

export default Router()
  .get("/students", GET_STUDENTS)
  .get("/get", GET)
  .post("/students", studentMiddlewar, POST_STUDENTS)
  .delete("/delete/:id", DELETE_STUDENTS);
