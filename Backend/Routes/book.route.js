import express from "express";
import { getBooks } from "../Controllers/book.controller.js";
const router = express.Router();

router.get("/", getBooks);

export default router;
