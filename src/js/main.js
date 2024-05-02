let tentsJSONPath =
  "https://raw.githubusercontent.com/josequemba/WDD330/main/src/json/tents.json";

function indexItemTemplate(item) {
  let newItem = `<li class="product-card">
  <a href="product_pages/marmot-ajax-3.html">
  <img
      src="${item.Image}"
      alt="${item.Name}"
      />
      <h3 class="card__brand">${item.Brand.Name}</h3>
      <h2 class="card__name">${item.NameWithoutBrand}</h2>
      <p class="product-card__price">${item.FinalPrice}</p></a
  >
</li>`;
  return newItem;
}

function renderCartContents() {
  const indexTents = fetchJSONData();
  for (let i = 0; i < stringify(indexTents).length; i++) {
    const htmlItems = indexItemTemplate(indexTents[i]);
    document.querySelector(".product-list").innerHTML += htmlItems;
  }
}

function fetchJSONData() {
  let tents = fetch(tentsJSONPath).then((response) => response.json());
  return tents;
}
console.log(fetchJSONData());

renderCartContents();
