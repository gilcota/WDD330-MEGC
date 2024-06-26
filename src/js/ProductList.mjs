import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {

    //hides product without pictures
    if (product.Id == "989CG" || product.Id == "880RT") {
    }

    else {
        return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
        <img src="${product.Image}" alt="Image of ${product.Name}"/>
        <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.Name}</h2>
        <p class="product-card__price">$${product.FinalPrice}</p>
    </a>
  </li>`;
    }

}

/* function filterUnusedProducts(pList) {  
    const show = ["880RR", "985RF", "985PR", "344YJ"];

    return pList.filter(p => show.includes(p.Id));
} */

export default class ProductListing {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const list = await this.dataSource.getData();
        this.renderList(list);
    }

    renderList(list) {
        renderListWithTemplate(productCardTemplate, this.listElement, list);
    }

    // renderList(list) {
    //     const htmlStrings = list.map(productCardTemplate);
    //     this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));
    // }

}