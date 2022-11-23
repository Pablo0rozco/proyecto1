let globalData;

function fetchData() {
  fetch(
    "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      modifyData(data);
      globalData = data;
      //console.log("Parsed response: ", data);
    })
    .catch((err) => console.log(err));
}

function modifyData(data) {
  let title = document.querySelectorAll(".fetch-project h3");
  let description = document.querySelectorAll(".fetch-project p");
  let image = document.querySelectorAll(".fetch-project img");

  let counter = 1;
  for (let i = title.length - 1; i >= 0; i--) {
    title[i].innerText = data[counter].name;
    description[i].innerText = data[counter].description;
    image[i].src = data[counter].image;
    counter++;
  }
}

fetchData();

let title = document.querySelector("#section-simplify h1");
let description = document.querySelector("#section-simplify h2");
let image = document.querySelector(".section-simplify-img");
let content = document.querySelector("#section-simplify p");
let date = document.querySelector(".data-holder");

/* console.log(title.innerText);
console.log(description.innerText);
console.log(image.src);
console.log(content.innerText);
console.log(date.innerText); */

function setDataProject(pos) {
  date.innerText = globalData[pos].completed_on;
  title.innerText = globalData[pos].name;
  description.innerText = globalData[pos].description;
  image.src = globalData[pos].image;
  content.innerText = globalData[pos].content;
}

// Arrow function to get the parameter
// of the specified key
getParameter = (key) => {
  // Address of the current window
  address = window.location.search;
  console.log(address);

  // Returns a URLSearchParams object instance
  parameterList = new URLSearchParams(address);
  console.log(parameterList);
  

  return parameterList.get(key);
};

console.log(getParameter("pos"));



