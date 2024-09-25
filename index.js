fetch("Test.json")
  .then((response) => response.json())
  .then((data) => {
    const dataContainer = document.getElementById("data-container");
    data.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} (${item.age})`;
      dataContainer.appendChild(listItem);
    });
  });
