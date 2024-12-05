import Joi from "joi";

const validateLibro = (req, res, next) => {
    const schema = Joi.object({
        titulo: Joi.string().required(),
        autor: Joi.string().required(),
        fechaPublicacion: Joi.date().required(),
        editorial: Joi.string().required(),
        precio: Joi.number().required(),
        stock: Joi.number().required(),
        imagen: Joi.string().required(),
        genero: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

const helmet = require('helmet');
app.use(helmet());


export { validateLibro };