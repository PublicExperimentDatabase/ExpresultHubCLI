const startMonitor = async (experimentTitle, bucketTitle, iterationTitle, interval) => {
  try {
    const response = await fetch(`http://localhost:3000/api/monitor/start`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        experimentTitle: experimentTitle,
        bucketTitle: bucketTitle,
        iterationTitle: iterationTitle,
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
