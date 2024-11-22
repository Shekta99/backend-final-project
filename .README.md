# CRUD con Netlify Functions y MongoDB Atlas

Este proyecto implementa un create and read básico utilizando Netlify Functions como backend serverless y MongoDB Atlas como base de datos para persistir la información.

## Estructura del Proyecto

- **Netlify Functions:** Contiene las funciones serverless para manejar las operaciones del CRUD.
- **MongoDB Atlas:** Base de datos en la nube para almacenar los datos de los productos.
- **Funciones Implementadas:**
  - `createProduct`: Crea un nuevo producto.
  - `getProducts`: Lee todos los productos almacenados.

## Requisitos Previos

1. Cuenta en [Netlify](https://www.netlify.com/).
2. Cuenta y clúster configurado en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
3. Node.js instalado.

## Configuración

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Shekta99/backend-final-project.git
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura la conexión a MongoDB:

   - Agrega la variable `MONGO_URI` en el archivo `netlify.toml`:
     ```toml
     [functions.environment]
     MONGO_URI = "uri de mongo"
     ```

4. Despliega el proyecto en Netlify:
   - Haz commit de los cambios y sube tu proyecto a un repositorio de Git.
   - Vincula el repositorio a Netlify.
   - Puedes probarlo en local con el comando `netlify dev`

## Funciones Implementadas

### **1. Crear un Producto**

**Endpoint:**

```
POST https://mock-backend-project.netlify.app/.netlify/functions/createProduct
```

**Cuerpo de la Solicitud:**

```json
{
  "nombre": "Producto Ejemplo",
  "precio": 100,
  "descripcion": "Descripción del producto"
}
```

**Respuesta:**

```json
{
  "message": "Producto creado",
  "id": "<id_del_producto>"
}
```

### **2. Leer Productos**

**Endpoint:**

```
GET https://mock-backend-project.netlify.app/.netlify/functions/getProducts
```

**Respuesta:**

```json
[
  {
    "_id": "<id_del_producto>",
    "nombre": "Producto Ejemplo",
    "precio": 100,
    "descripcion": "Descripción del producto"
  }
]
```

## Tecnologías Utilizadas

- **Netlify Functions**: Para implementar las funciones serverless.
- **MongoDB Atlas**: Como base de datos para persistir la información.
- **Node.js**: Entorno de ejecución para JavaScript.
- **npm**: Gestor de paquetes para instalar las dependencias necesarias.
