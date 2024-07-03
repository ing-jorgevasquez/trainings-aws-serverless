exports.handler = async (event) => {
  const { body, eventSource } = event["Records"][0];
  if (eventSource !== "aws:sqs") return;
  console.log(body);
};
