function loadBeers() {
  fetch("https://api.punkapi.com/v2/beers")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // const name = data[0].name;
      // const img = data[0].image_url;
      // const desc = data[0].description;
      // tenir 3 index random entre 0 i data.length-1;
      const idxs = [];
      idxs.push(Math.floor(Math.random() * (data.length - 2)));
      idxs.push(idxs[0] + 1);
      idxs.push(idxs[0] + 2);
      const cards = document.getElementsByClassName("card");
      for (let i = 0; i < 3; i++) {
        const card = cards.item(i);
        const imgEl = card.querySelector("img");
        imgEl.setAttribute("src", data[idxs[i]].image_url);
        const nameEl = card.querySelector("h3");
        nameEl.innerHTML = data[idxs[i]].name;
        const descEl = card.querySelector("p");
        descEl.innerHTML = data[idxs[i]].description;
        const anchorEl = card.querySelector("a");
        anchorEl.setAttribute("href", `index-projects.html?project=${idxs[i]}`);
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
  document.getElementById("date").innerHTML = currentDate.toLocaleDateString();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  console.log(urlParams.get("project"));
  // fetch de les beers
  // agafar la posicio de la variable project
  // canviar els elements del dom amb els valors de beers[project]
}
