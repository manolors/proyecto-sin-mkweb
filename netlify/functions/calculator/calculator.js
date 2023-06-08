

const handler = async (event) => {
  try {
    const num1 = event.queryStringParameters.num1 || false;
    const num2 = event.queryStringParameters.num2 || false;

    const operacion = event.queryStringParameters.operacion || "";

    // sumar - restar - multiplicar - dividr
    let resultado = 0;
    if (operacion == "sumar") {
      resultado = num1 + num2
    } else if (operacion == "restar") {
      resultado = num1 - num2;
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ resultado }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };