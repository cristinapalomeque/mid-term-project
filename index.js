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
loadBeers();
