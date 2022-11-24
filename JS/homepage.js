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

console.log(title.innerText);
console.log(description.innerText);
console.log(image.src);
console.log(content.innerText);
console.log(date.innerText);

function setDataProject() {
  const QueryString = window.location.search;
  const urlParams = new URLSearchParams(QueryString);
  pos = urlParams.get("pos");

  console.log(pos);
  date.innerText = globalData[pos].completed_on;
  title.innerText = globalData[pos].name;
  description.innerText = globalData[pos].description;
  image.src = globalData[pos].image;
  content.innerText = globalData[pos].content;
}

function randomPosition(){
  let position = Math.floor(Math.random()* 3 + 1)
  let randomProject = document.querySelector(".randomProject");
  randomProject.setAttribute("href", `./project.html?pos=${position}`)    
}
randomPosition()



async function loadProjectPage() {
  if (window.location.search) {
    await fetchData();
    setDataProject();
    console.log("test");

    const elementToShow = document.querySelectorAll(".hidden");

    console.log(elementToShow);

    for (const element of elementToShow) {
      element.classList.replace("hidden", "shown");
    }

    const elementToHide = document.querySelector(".shown");
    console.log(elementToHide);
    elementToHide.classList.replace("shown", "hidden");

    console.log(elementToHide);
  } else {
    const elementToShow = document.querySelectorAll(".hidden");

    console.log(elementToShow);

    for (const element of elementToShow) {
      element.classList.replace("hidden", "shown");
    }

    const elementToHide = document.querySelector(".shown");
    console.log(elementToHide);
    elementToHide.classList.replace("shown", "hidden");

    console.log(elementToHide);
  }
}
