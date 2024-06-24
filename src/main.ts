import './style.css'
import loadContent from "./content.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="products-container" class="products-container"></div>
    <div id="modal" class="modal">
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <div id="modal-description"></div>
        <div id="modal-footer"></div>
      </div>
    </div>
  </div>
`;

loadContent();
