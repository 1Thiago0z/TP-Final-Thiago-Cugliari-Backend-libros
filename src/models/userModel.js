import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

process.loadEnvFile();


const JWT_SECRET = process.env.JWT_SECRET;


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("Users", userSchema);

const register = async (username, password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hashedPassword });
        return user;
    } catch (error) {
        throw error;
    }
};

const login = async (username, password) => {
    try {
        const user = await User.findOne({ username });
        if (!user) {
            throw new Error("Usuario no encontrado");
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Contraseña inválida");
        }

        console.log("Usuario encontrado:", user);
        console.log("Contraseña válida:", isPasswordValid);

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
        console.log("Token generado:", token);
        return token;
    } catch (error) {
        console.error("Error en login:", error.message);
        throw error;
    }
};

export default { register, User, login };
