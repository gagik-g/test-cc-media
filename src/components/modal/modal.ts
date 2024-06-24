import { Product } from "../../lib/types.ts";
import modalFooter from "./modalFooter.ts";
import modalBody from "./modalBody.ts";

export default function modal(item: Product) {
  const modal = document.getElementById('modal') as HTMLDivElement;
  const closeButton = document.querySelector('.close-button') as HTMLSpanElement;

  closeButton.addEventListener('click', () => {
    modal.style.display = "none";
  });


  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  modalBody(item);
  modalFooter(item);
}


