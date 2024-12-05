import mongoose from "mongoose";

const libroSchema = new mongoose.Schema(
    {
    titulo: {
        type: String,
        required: true,
        trim: true,
    },
    autor: {
        type: String,
        required: true,
        trim: true,
    },
    genero: {
        type: String,
        required: true,
        enum: [
        "Ficción",
        "No ficción",
        "Ciencia ficción",
        "Fantasía",
        "Misterio",
        "Romance",
        "Biografía",
        "Historia",
        "Otro",
        ],
        trim: true,
    },
    fechaPublicacion: {
        type: String, 
        required: true,
        match: /^\d{4}-\d{2}-\d{2}$/,
    },
    idioma: {
        type: String,
        required: true,
        default: "Español",
        enum: ["Español", "Inglés", "Francés", "Alemán", "Otro"],
        trim: true,
    },
    paginas: {
        type: Number,
        required: true,
        min: 1,
    },
    estado: {
        type: String,
        default: "disponible",
        enum: ["disponible", "prestado", "reservado", "agotado"],
    },
    },
    { versionKey: false }
);



const Libro = mongoose.model("Libro", libroSchema);


const getAllLibros = async () => {
try {
    const libros = await Libro.find();
    return libros;
} catch (error) {
    throw new Error("Error al obtener los libros");
}
};


const getLibrosById = async (id) => {
try {
    const libro = await Libro.findById(id);
    return libro;
} catch (error) {
    throw new Error("Error al obtener el libro");
}
};

const createLibro = async (dataLibro) => {
try {
    const LibroCreado = Libro.create(dataLibro);
    return LibroCreado;
} catch (error) {
    throw new Error("Error al crear el libro");
}
};

const updateLibro = async (id, dataLibro) => {
try {
    const libroActualizado = await Libro.findByIdAndUpdate(id, dataLibro, {
    new: true,
    });
    return libroActualizado;
} catch (error) {
    throw new Error("Error al actualizar el libro");
}
};

const deleteLibro = async (id) => {
try {
    const libroEliminado = await Libro.deleteOne({ _id: id });
    return libroEliminado;
} catch (error) {
    throw new Error("Error al eliminar el libro");
}
};

export default {
getAllLibros,
getLibrosById,
createLibro,
updateLibro,
deleteLibro,
};
