import { Router } from "express";
import groupsMiddlewars from "../middlewares/groupsMiddlewars.js";

import {
  GET_GROUPS,
  POST_GROUPS,
  DELETE_GROUP,
  GET_SELECT,
} from "../controllers/groups.js";

export default Router()
  .get("/groups", GET_GROUPS)
  .get("/select", GET_SELECT)
  .post("/groups", groupsMiddlewars, POST_GROUPS)
  .delete("/groupsDelete/:id", DELETE_GROUP);
