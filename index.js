function loadBeers() {
  fetch("https://api.punkapi.com/v2/beers")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // const name = data[0].name;
      // const img = data[0].image_url;
      // const desc = data[0].description;
      const cards = document.getElementsByClassName("card");
      for (let i = 0; i < 3; i++) {
        const card = cards.item(i);
        const imgEl = card.querySelector("img");
        imgEl.setAttribute("src", data[i].image_url);
        const nameEl = card.querySelector("h3");
        nameEl.innerHTML = data[i].name;
        const descEl = card.querySelector("p");
        descEl.innerHTML = data[i].description;
      }
    })
    .catch((err) => console.log(err));
}

function initMainPage() {
  const subButt = document.getElementById("submit");
  subButt.addEventListener("click", () => {
    const input = document.getElementById("email_input");
    if (input.value.indexOf("@") === -1) {
      //alert("Please, include an @ in the email address");
      const fieldError = document.getElementById("field-error");
      fieldError.style.display = "block";
      setTimeout(() => {
        fieldError.style.display = "none";
      }, 3000);
    }
  });
  loadBeers();
}

function initContactPage() {
  const contButt = document.getElementById("submit-form");
  contButt.addEventListener("click", () => {
    const nameForm = document.getElementById("name");
    if (nameForm.value.length === 0) {
      const nameError = document.getElementById("name-error");
      //nameError.classList.remove("hidden-error");
      nameError.style.display = "block";
      setTimeout(() => {
        nameError.style.display = "none";
      }, 3000);
    }
    const message = document.getElementById("message");
    if (message.value.length === 0) {
      const msgError = document.getElementById("msg-error");
      msgError.style.display = "block";
      setTimeout(() => {
        msgError.style.display = "none";
      }, 3000);
    }
  });
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".hamburger-links");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

function initProjectPage() {
  let currentDate = new Date();
  document.getElementById("date").innerHTML = currentDate;
}
