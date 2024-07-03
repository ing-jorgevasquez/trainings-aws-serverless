exports.handler = async (event) => {
  const statusCode = 200;
  const baseResponse = {
    statusCode,
    message: "Hello from Lambda",
  };

  return {
    statusCode,
    body: JSON.stringify(baseResponse),
    headers: {
      "Content-Type": "application/json",
    },
    isBase64Encoded: false,
  };
};
