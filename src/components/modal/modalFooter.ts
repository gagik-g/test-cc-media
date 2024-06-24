import { Product } from "../../lib/types.ts";
import dropdown from "../dropdown.ts";

export default function modalFooter(item: Product) {
  const modalFooter = document.getElementById('modal-footer') as HTMLDivElement;
  modalFooter.innerHTML = `
    <div class="title">${item.name}</div>
    <div id="dropdown-wrapper"></div>
  `;

  dropdown();
}


