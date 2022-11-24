let globalData;

async function fetchData() {
   return fetch(
    "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      modifyData(data);      
      globalData = data;
      console.log("Parsed response: ", data);
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

console.log(title.innerText)
console.log(description.innerText)
console.log(image.src)
console.log(content.innerText)
console.log(date.innerText)



function setDataProject() {  
  const QueryString = window.location.search;
  const urlParams = new URLSearchParams(QueryString);
  pos = urlParams.get("pos");
  
  console.log(pos)
  date.innerText = globalData[pos].completed_on;
  title.innerText = globalData[pos].name;
  description.innerText = globalData[pos].description;
  image.src = globalData[pos].image;
  content.innerText = globalData[pos].content;
}


async function loadProjectPage() {
  await fetchData();
  setDataProject();
}