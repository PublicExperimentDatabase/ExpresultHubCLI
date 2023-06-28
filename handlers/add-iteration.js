const createIteration = async (experimentName, bucketName, iterationName, description) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/experiments/${experimentName}/buckets/${bucketName}/iterations`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          iterationName: iterationName,
          description: description,
        }),
      }
    );

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
  createIteration,
};
