import user from "../models/userModel.js";


const register = async (req, res) => {
    try {
    const { username, password } = req.body;
    const newUser = await user.register(username, password);
    res.status(201).json(newUser);
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
};


const login = async (req, res) => {
    try {
    const { username, password } = req.body;
    const token = await user.login(username, password);
    res.status(200).json({ token });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};


export { register, login };