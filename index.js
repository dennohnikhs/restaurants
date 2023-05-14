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

// function registrationSuccess() {
//   const message = "Registered successfully!!";
//   const createdDiv = document.createElement("div");
//   createdDiv.innerHTML = message;
//   let displayedMessage = document.getElementById("toast-message");
//   displayedMessage.append(createdDiv);
// }
