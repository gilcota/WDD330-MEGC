import {
  getLocalStorage,
  hideElement,
  showElement,
  loadHeaderFooter,
} from "./utils.mjs";

//From shoppingcart.mjs
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();

//From shoppingcart.mjs
const cart = new ShoppingCart("so-cart", ".product-list");
cart.renderCartContents();


//This function return true if the Local Storage has items
function cartHasItems() {
  if (getLocalStorage("so-cart") != null) {
    return true;
  }
}

//Function reads calculates the final price of the items in the cart, backlog1
function renderTotal() {
  const cartItems = getLocalStorage("so-cart");
  let total = 0;
  if (cartHasItems()) {
    showElement(".cart-total");
    for (let i = 0; i < cartItems.length; i++) {
      total += JSON.parse(cartItems[i].FinalPrice);
    }
    document.querySelector(".cart-total").innerHTML += total.toFixed(2);
  }
  hideElement(".cart-total");
}

renderTotal();
