function showCountries() {
  let xhr = new XMLHttpRequest();
  //intialize the request using the get method to load the content and specify  if asyncronous or not
  xhr.open("GET", "https://restcountries.com/v2/all", true);
  //callback function to deal with status code
  xhr.onload = function () {
    let countries = JSON.parse(xhr.response);
    countries.forEach((country) => {
      const countryCard = document.createElement("div");
      countryCard.innerHTML = country.name;
      const countryCardImage = document.createElement("img");
      countryCardImage.src = country.flag;
      // countryCard.appendChild(countryCardImage);
      document.getElementById("countries-list").appendChild(countryCard);
    });
  };

  xhr.send();
}
// function showToast() {
//   const toast = document.getElementById("toast");
//   const addToast = document.getElementById("show-toast");
//   addToast.addEventListener("click", function () {
//     toast.classList.add("toast-active");
//   });
// }
// function closeToast() {
//   const toast = document.getElementById("toast");
//   const buttonClose = document.getElementById("close-button");
//   buttonClose.addEventListener("click", function () {
//     toast.classList.remove("toast-active");
//   });
// }
function registrationSuccess() {
  const message = "Registered successfully!!";
  const createdDiv = document.createElement("div");
  createdDiv.innerHTML = message;
  let displayedMessage = document.getElementById("toast-message");
  displayedMessage.append(createdDiv);
}
