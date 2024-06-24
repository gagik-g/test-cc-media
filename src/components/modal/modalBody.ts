import { Product } from "../../lib/types.ts";

export default function modalBody(item: Product) {
  const modalDescription = document.getElementById('modal-description') as HTMLDivElement;

  modalDescription.innerHTML = `
    <div class="image-and-description">
      <div id="modal-beer-info-circle" class="item-wrapper">
        <img src="${item.image_url}" alt="${item.name}">
        <div class="border-bottom"></div>
        <div class="ibu-modal">IBU ${item.ibu}</div>
        <div class="abv-modal">${item.abv}%</div>
      </div>
      
      <div class="description">${item.description}</div>
    </div>
  `

  const bgColorPerIbu = `bg${item.ibu.toString()[0]}`;
  const itemWrapper = document.getElementById('modal-beer-info-circle') as HTMLDivElement;
  itemWrapper.classList.add(bgColorPerIbu);
}


