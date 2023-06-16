const createIteration = async (experimentTitle, iterationTitle, description) => {
  try {
    const response = await fetch(`http://localhost:3000/api/iteration/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        experimentTitle: experimentTitle,
        iterationTitle: iterationTitle,
        description: description,
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
  createIteration,
};
