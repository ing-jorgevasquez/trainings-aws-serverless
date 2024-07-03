exports.handler = async (event) => {
    const { Sns: sns, EventSource: eventSource } = event["Records"][0];
    if (eventSource !== "aws:sns") return;
    console.log(sns["Message"]);
};
