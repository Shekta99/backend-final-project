const { connectToDB } = require("./db");

exports.handler = async (event) => {
  try {
    const db = await connectToDB();
    const product = JSON.parse(event.body);

    const result = await db.collection("products").insertOne(product);

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Producto creado",
        id: result.insertedId,
      }),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
