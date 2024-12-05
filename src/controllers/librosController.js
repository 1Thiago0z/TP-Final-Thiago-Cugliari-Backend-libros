import Libro from "../models/libroModel.js";

const getAllLibros = async (req, res) => {
    try {
    const libro = await Libro.getAllLibros();
    res.status(200).json(libro);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

const getLibrosById = async (req, res) => {
    try {
    const libro = await Libro.getLibrosById(req.params.id);
    res.status(200).json(libro);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

const createLibro = async (req, res) => {
    try {
    const libroCreado = await Libro.createLibro(req.body);
    res.status(201).json(libroCreado);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

const updateLibro = async (req, res) => {
    try {
    const libroActualizado = await Libro.updateLibro(req.params.id, req.body);
    res.status(200).json(libroActualizado);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};


const deleteLibro = async (req, res) => {
    try {
    const libroEliminado = await Libro.deleteLibro(req.params.id);
    res.status(200).json(libroEliminado);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

export { getAllLibros, getLibrosById, createLibro, updateLibro, deleteLibro };