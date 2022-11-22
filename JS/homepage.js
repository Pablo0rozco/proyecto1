function fetchData() {
  fetch(
    "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      modifyData(data);
      console.log("Parsed response: ", data);
    })
    .catch((err) => console.log(err));
}

function modifyData(data) {
  let title = document.querySelectorAll(".project-name");
  let description = document.querySelectorAll(".fetch-project p");
  let image = document.querySelectorAll(".fetch-project img");

  for (let i = 0; i < title.length; i++) {
    title[i].innerText = data[i].name;
    description[i].innerText = data[i].description;
    image[i].src = data[i].image;
  }
}

fetchData();
