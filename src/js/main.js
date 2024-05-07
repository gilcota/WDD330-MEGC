import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";

const dataSource = new ProductData("tents");
const listElement = document.querySelector(".product-list");
const productListing = new ProductListing("tents", dataSource, listElement);

productListing.init();
//console.log(dataSource);
//console.log({ dataSource });

//alert code

//import Alert from "./Alert.mjs"; // Assuming alert.js is the file containing the alert class
//const alertInstance = new Alert("../alerts.json"); // Path to your JSON file
//alertInstance.readAlert("message"); // Specify the key name here

//alert code
