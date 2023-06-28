const startMonitor = async (experimentName, bucketName, iterationName, interval) => {
  try {
    const response = await fetch(`http://localhost:3000/api/monitor/start`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        experimentName: experimentName,
        bucketName: bucketName,
        iterationName: iterationName,
        interval: interval,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
    } else {
      console.error("Request Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  startMonitor,
};
