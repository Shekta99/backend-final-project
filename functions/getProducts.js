const { connectToDB } = require("./db");

exports.handler = async () => {
  try {
    const db = await connectToDB();
    const products = await db.collection("products").find().toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
