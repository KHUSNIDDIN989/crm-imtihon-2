import { Router } from "express";
import { GET_ADMIN } from "../controllers/admin.js";

export default Router().get("/", GET_ADMIN);
