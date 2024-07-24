class ActiveCartBtn {
  #BtnBgColor =  "hsl(14, 86%, 42%)";
  className = "active-cart__btn"; 

  constructor(originalCartBtn) {
    this.originalBtn = originalCartBtn;
    this.activeCartBtn = document.createElement("button");
  }

 #cartBtnStyles(activeCartBtn) {
    activeCartBtn.style.position = "absolute";
    activeCartBtn.style.backgroundColor = this.#BtnBgColor;
    activeCartBtn.style.inset = "0";
    activeCartBtn.style.zIndex = "2";
    activeCartBtn.classList.add(this.c);

    this.originalBtn.style.border = "none";
  }  

  createActiveCartBtn() {
    this.#cartBtnStyles(this.activeCartBtn);
    this.originalBtn.appendChild(this.activeCartBtn);
  }
}

function createActiveCartBtn(addcartBtn) {
  new ActiveCartBtn(addcartBtn).createActiveCartBtn();
}

function handleCartBtns() {
  let addCartBtns = document.querySelectorAll("[data-add-to-cart-btn]");

  addCartBtns.forEach((addCartBtn) => {
    addCartBtn.addEventListener("click",function() {
        createActiveCartBtn(this);
    });
  });
}

handleCartBtns();