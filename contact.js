$("document").ready(() => {
  $("#form").submit((e) => {
    e.preventDefault();
    let nameInput = $("#name").val();
    // let emailInput = $("#email".val());
    // let messageInput = $("#message".val());
    // let countryInput = $("#country".val());
    $("#contact-success").html(
      "Thank you" +
        " " +
        nameInput +
        " " +
        " for contacting Us our team will get back to you shortly."
    );
    $("#form").animate(
      {
        top: "50px",
        opacity: "0.1",
        height: "400px",
        width: "400px",
      },
      5000
    );
    $("#form").fadeOut(2000);
    $("#contact-goodbye").html(nameInput + " " + "Goodbye !!");
  });
});
function chooseCountry() {
  let xhr = new XMLHttpRequest();
  //intialize the request using the get method to load the content and specify  if asyncronous or not
  xhr.open("GET", "https://restcountries.com/v2/all", true);
  //callback function to deal with status code
  xhr.onload = function () {
    let countries = JSON.parse(xhr.response);
    countries.forEach((country) => {
      const countryCard = document.createElement("option");
      countryCard.innerHTML = country.name;
      // countryCard.appendChild(countryCardImage);
      document.getElementById("country").appendChild(countryCard);
    });
  };

  xhr.send();
}
// use query selector method to select the form
// const form = document.querySelector("form");
// add eventlistener to the form submit button to trigger that event
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);

//   for (item of formData) {
//     console.log(item[0], item[1]);
//   }
//   fetch("https://your server domain/api/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   })
//     .then((res) => {
//       res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });
