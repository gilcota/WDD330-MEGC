import {
  getLocalStorage,
  hideElement,
  showElement,
  cartHasItems,
} from "./utils.mjs";

//This function return true if the Local Storage has items

//Function reads calculates the final price of the items in the cart, backlog1
function renderTotal() {
  const cartItems = getLocalStorage("so-cart");
  let total = 0;
  if (cartHasItems()) {
    showElement(".cart-total");
    for (let i = 0; i < cartItems.length; i++) {
      total += JSON.parse(cartItems[i].FinalPrice);
    }
    document.querySelector(".cart-total").innerHTML += total;
  }
  hideElement(".cart-total");
}

//Function to render cart content, backlog1
function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  if (cartHasItems()) {
    for (let i = 0; i < cartItems.length; i++) {
      const htmlItems = cartItemTemplate(cartItems[i]);
      document.querySelector(".product-list").innerHTML += htmlItems;
    }
    addEventListener(cartItems);
  }
}

function addEventListener() {
  let index = 0;
  let spans = document.querySelectorAll("span");
  const cart = getLocalStorage("so-cart");
  for (let i = 0; i < spans.length; i++) {
    spans[i].addEventListener("click", () => console.log(spans[i].id));
  }
}

/*function deleteItemByPosition(arr, position) {
  if (position < 0 || position >= arr.length) {
    // Handle invalid position
    console.error("Invalid position:", position);
    return;
  }
  arr.splice(position, 1);
}

/*function CartWithDelete() {
  renderCartContents();
  let index = addEventListener();
  let cart = getLocalStorage("so-cart");
  deleteItemByPosition(cart, index);
  renderCartContents();
}*/

function cartItemTemplate(item) {
  let newItem = `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img
        src="${item.Image}"
        alt="${item.Name}"
      />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
    <span class="close-span" id=${item.Id}> ❌ </span>
  </li>`;
  return newItem;
}

renderCartContents();
renderTotal();
