import { Router } from "express";
import {
    getAllLibros,
    getLibrosById,
    createLibro,
    updateLibro,
    deleteLibro,
} from "../controllers/librosController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const libroRouter = Router();

libroRouter.get("/", getAllLibros);
libroRouter.get("/:id", getLibrosById);
libroRouter.post("/", verifyToken, createLibro);
libroRouter.put("/:id", verifyToken, updateLibro);
libroRouter.delete("/:id", verifyToken, deleteLibro);

export { libroRouter };