import products from "./components/products.ts";
import { Product } from "./lib/types.ts";

export const API_URL = 'https://api.jsonbin.io/v3/b/6630fd9be41b4d34e4ecd1f9';

export default function loadContent() {
  document.addEventListener("DOMContentLoaded", () => {

    fetch(API_URL, {
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        const productList: Product[] = data.record;
        products(productList);
      });
  });
}

