import express from "express";
import { connectDB } from "./src/config/mongo.js";
import { libroRouter } from "./src/routes/libroRouter.js";
import { userRouter } from "./src/routes/userRouter.js";

const app = express();

process.loadEnvFile();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use("/api/libros", libroRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log("Servidor escuchando en http://localhost:" + PORT);
});