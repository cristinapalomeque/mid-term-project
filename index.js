function loadBeers() {
  fetch("https://api.punkapi.com/v2/beers")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const name = data[0].name;
      const img = data[0].image_url;
      const desc = data[0].description;
      const cards = document.getElementsByClassName("card");
      for (let i = 0; i < 3; i++) {
        const card = cards.item(i);
        const imgEl = card.querySelector("img");
        imgEl.setAttribute("src", img);
        const nameEl = card.querySelector("h3");
        nameEl.innerHTML = name;
        const descEl = card.querySelector("p");
        descEl.innerHTML = desc;
      }
    })
    .catch((err) => console.log(err));
}
loadBeers();
// index.js
/*
fetch("https://api.punkapi.com/v2/beers")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((launchObj) => {
      const patchImage = launchObj.links.patch.small;
      const imgElement = document.createElement("img");

      imgElement.setAttribute("src", patchImage);
      imgElement.setAttribute("width", 200);
      document.body.appendChild(imgElement);
    });
  })
  .catch((err) => console.log(err));*/
