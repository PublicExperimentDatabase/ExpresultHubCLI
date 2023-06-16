const stopMonitor = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/monitor/stop`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
  stopMonitor,
};
