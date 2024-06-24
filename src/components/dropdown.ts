export default function dropdown() {
  const dropdownDiv = document.getElementById('dropdown-wrapper') as HTMLDivElement;

  dropdownDiv.innerHTML = `
    <div class="dropdownWrapper">
    <button id="order" class="order">order <div class="arrow right">&rsaquo;</div></button>
    
    <div id="popover" class="popover">
        <div id="1" class="popover-item">
          <div class="name">Glass</div> <div class="arrow">&rsaquo;</div>
        </div>
        <div id="2" class="popover-item">
          <div class="name">Can</div> <div class="arrow">&rsaquo;</div>
        </div>
        <div id="3" class="popover-item">
          <div class="name">Box</div> <div class="arrow">&rsaquo;</div>
        </div>
    </div>
    
    <div id="popover-2" class="popover level2">
        <div class="popover-item">
        <div class="name">1</div></div>
        <div class="popover-item"><div class="name">2</div></div>
        <div class="popover-item"><div class="name">3</div></div>
    </div>
  </div>
  `

  const order = document.getElementById('order') as HTMLDivElement;
  const popover = document.getElementById('popover') as HTMLDivElement;
  const popover2 = document.getElementById('popover-2') as HTMLDivElement;

  order.addEventListener('click', () => {
    if (popover.style.display === 'block') {
      popover.style.display = 'none';
      popover2.style.display = 'none';
    } else {
      popover.style.display = 'block';
    }
  });


  let elem: EventTarget | null = popover.children[0];
  for (let i = 0; i < popover.children.length; i++) {
    popover.children[i].addEventListener('click', (event) => {
      if (popover2.style.display === 'block' && event.target === elem) {
        popover2.style.display = 'none';
      } else {
        console.dir(popover.children[i], 2222);
        switch (popover.children[i].id) {
          case '1':
            popover2.style.top = '40px';
            break;
          case '2':
            popover2.style.top = '80px';
            break;
          case '3':
            popover2.style.top = '120px';
            break;
        }
        popover2.style.display = 'block';
        elem = event.target;
      }
    })
  }

  window.addEventListener('click', (event) => {
    const target = event.target as Element;
    const targetParent = target.parentElement;
    const targetGrandParent = targetParent ? targetParent.parentElement : null;

    if (
      event.target !== order
      && event.target !== popover
      && event.target !== popover2
      && targetParent !== popover
      && targetGrandParent !== popover
    ) {
      popover.style.display = "none";
      popover2.style.display = "none";
    }
  });
}


