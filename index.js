let blue = document.getElementById("blue");
let body = document.getElementById("body");
let text = document.getElementById("white");
function updateBodyClass() {
  if(blue.checked){
    text.classList.add("text-lightmode");
    body.classList.add("light-mode");
  } else{
    text.classList.remove("text-lightmode");
    body.classList.remove("light-mode");
  }
}

blue.addEventListener("change" , updateBodyClass);

