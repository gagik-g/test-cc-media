import { Product } from "../lib/types.ts";
import loadModal from "./modal/modal.ts";

export default function products(productList: Product[]) {
  const productsContainer = document.getElementById('products-container') as HTMLDivElement;
  const modal = document.getElementById('modal') as HTMLDivElement;

  productList.forEach(item => {
    const bgColorPerIbu = `bg${item.ibu.toString()[0]}`;
    const colorPerIbu = `color${item.ibu.toString()[0]}`;

    // product logic
    const product = document.createElement('div') as HTMLDivElement;
    product.classList.add('product-item', bgColorPerIbu);
    product.innerHTML = `
                <img src="${item.image_url}" alt="${item.name}">
                <div class="ibu ${colorPerIbu}">IBU: ${item.ibu}</div>
                <div class="abv">${item.abv}%</div>
                <div class="title">${item.name}</div>
            `;

    // modal logic
    product.addEventListener('click', () => {
      modal.style.display = "block";
      loadModal(item);
    });

    productsContainer.appendChild(product as Node);
  });
}


