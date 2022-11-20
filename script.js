/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const buttons = document.getElementsByClassName("subject");
let dropbtn = document.getElementsByClassName("dropbtn");
let dropdownDiv = document.getElementsByClassName("dropdown");

const buttonPressed = (e) => {
  //   console.log(e.target.id);
  switch (e.target.id) {
    case e.target.id:
      let subDiv = document.createElement("div");
      subDiv.innerText = e.target.id;
      console.log(subDiv);
      break;

    default:
      break;
  }
};

// const buttonPressed = (e) => {
//   for (let i = 0; i < array.length; i++) {
//     let subDiv = document.createElement("div");
//     subDiv.innerHTML = e.target.id;
//     dropdownDiv.append.subDiv;
//   }
// };

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
  dropdownDiv.appendChild(subDiv);
}
function myFunction2() {
  console.log("hi");
}
