const handler = async (event) => {
  try {

    const num1 = parseInt(event.queryStringParameters.num1) || 0
    const num2 = parseInt(event.queryStringParameters.num2) || 0
    const resultado = num1 + num2

    return {
      statusCode: 200,
      body: JSON.stringify({ message: resultado}),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
