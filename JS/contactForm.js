const form = document.getElementById("form");
const fullname = document.getElementById("fullname");


form.addEventListener("submit", (e) => {
  e.preventDefault();  

  if (fullname.value === "ironhack") {
    alert("You cannot be Ironhack, because I am Ironhack.");
  } else {
    fullname.value = "";
  }


});


