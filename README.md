# Documentación de la API de Gestión de Libros

Esta API permite gestionar libros, incluyendo la creación, consulta, actualización y eliminación de los mismos. Para acceder a sus funcionalidades, los usuarios deben registrarse y autenticarse. La API utiliza **MongoDB** para la gestión de datos y **Express-Validator** para validar las entradas de datos.

## **Endpoints Disponibles**

### **1. Autenticación**

#### **Registro de Usuario**

**URL:** `/api/users/register`  
**Método:** `POST`  
**Descripción:** Permite registrar un nuevo usuario en el sistema.  
**Cuerpo de la Solicitud (JSON):**

```json
{
  "username": "string",
  "password": "string"
}
```

**Respuestas:**

- **201:** Usuario creado exitosamente.
- **400:** Campos obligatorios no proporcionados.
- **500:** Error interno del servidor.

#### **Inicio de Sesión**

**URL:** `/api/users/login`  
**Método:** `POST`  
**Descripción:** Autentica a un usuario y genera un token.  
**Cuerpo de la Solicitud (JSON):**

```json
{
  "username": "string",
  "password": "string"
}
```

**Respuestas:**

- **200:** Devuelve el token de autenticación.
- **400:** Campos obligatorios no proporcionados.
- **500:** Error interno del servidor.

---

### **2. Gestión de Libros**

#### **Obtener Todos los Libros**

**URL:** `/api/libros`  
**Método:** `GET`  
**Descripción:** Devuelve la lista completa de libros.  
**Respuestas:**

- **200:** Lista de libros.
- **404:** No se encontraron libros.
- **500:** Error interno del servidor.

#### **Obtener un libro por ID**

**URL:** `/api/libros/:id`  
**Método:** `GET`  
**Descripción:** Devuelve los detalles de un libro específico.  
**Parámetros de URL:**

- `id` (string): ID del libro.  
  **Respuestas:**
- **200:** Detalles del libro.
- **404:** libro no encontrado.
- **500:** Error interno del servidor.

#### **Crear un Nuevo Libro**

**URL:** `/api/libros`  
**Método:** `POST`  
**Descripción:** Crea un nuevo libro.  
**Cuerpo de la Solicitud (JSON):**


**Respuestas:**

- **201:** Libro creado exitosamente.
- **400:** Validación fallida.
- **409:** Libro ya existente.
- **500:** Error interno del servidor.

#### **Actualizar un Libro**

**URL:** `/api/libros/:id`  
**Método:** `PUT`  
**Descripción:** Actualiza un libro existente.  
**Parámetros de URL:**


**Respuestas:**

- **200:** Libro actualizado exitosamente.
- **400:** Validación fallida.
- **404:** Libro no encontrado.
- **409:** El Libro está ocupado y no se puede actualizar.
- **500:** Error interno del servidor.

#### **Eliminar un Libro**

**URL:** `/api/libros/:id`  
**Método:** `DELETE`  
**Descripción:** Elimina un libro por su ID.  
**Parámetros de URL:**

- `id` (string): ID del libro.  
  **Respuestas:**
- **200:** Libro eliminado exitosamente.
- **404:** Libro no encontrado.
- **500:** Error interno del servidor.

---

## **Requisitos Previos**

1. **Registro y Autenticación:**  
   Para utilizar la API, primero debes registrarte mediante el endpoint `/register` y luego autenticarte en `/login`. El token recibido en el inicio de sesión debe incluirse en la cabecera `Authorization` como `Bearer <token>` para los endpoints protegidos.

2. **Validaciones:**  
   Los datos enviados en las solicitudes son validados utilizando **Express-Validator**. Si la validación falla, se devolverá un error con los detalles de las fallas.



## **Tecnologías Utilizadas**

- **Node.js** con **Express.js** para el backend.
- **Helmet** para la seguridad.
- **MongoDB** para almacenamiento de datos.
- **Mongoose** para interactuar con la base de datos MongoSB.
- **Express-Validator** para validación de entradas.
- **JWT** para autenticación basada en tokens.
- **Bcryptjs** para hashear el password del usuario.

## **Cómo Correr la API**

1. Instalar las dependencias:

   ```bash
   npm install
   ```

2. Configurar las variables de entorno:
   - Configura tu conexión a MongoDB.
   - Añade una clave secreta para JWT.
3. Iniciar el servidor:

   ```bash
   npm run dev
   ```

4. Accede a la API a través de `http://localhost:<puerto>` (por defecto, 5555).

¡Listo! Puedes comenzar a usar la API.

