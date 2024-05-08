import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");
const listElement = document.querySelector(".product-list");
const productListing = new ProductListing("tents", dataSource, listElement);

productListing.init();

//localStorage.clear();

//console.log(dataSource);
//console.log({ dataSource });

//alert code

//import Alert from "./Alert.mjs"; // Assuming alert.js is the file containing the alert class
//const alertInstance = new Alert("../alerts.json"); // Path to your JSON file
//alertInstance.readAlert("message"); // Specify the key name here

//alert code
