class ActiveCartBtn {
  btnBgColor =  "hsl(14, 86%, 42%)";
  className = "active-cart__btn"; 

  constructor(originalCartBtn) {
    this.originalBtn = originalCartBtn;
    this.activeCartBtn = document.createElement("button");
  }

 #cartBtnStyles(activeCartBtn) {
    activeCartBtn.style.position = "absolute";
    activeCartBtn.style.backgroundColor = this.btnBgColor;
    activeCartBtn.style.inset = "0";
    activeCartBtn.style.zIndex = "2";
    activeCartBtn.style.display = "flex";
    activeCartBtn.style.justifyContent = "space-Between";
    activeCartBtn.style.alignItems = "center";
    activeCartBtn.style.padding = "inherit";

    activeCartBtn.classList.add(this.className);

    this.originalBtn.style.border = "none";
  }  

  createActiveCartBtn() {
    this.#cartBtnStyles(this.activeCartBtn);
    this.originalBtn.appendChild(this.activeCartBtn);
    
    const incrementOrderBtn = new IncrementOrderBtn("/assets/images/icon-increment-quantity.svg").getOrderBtn();
    this.activeCartBtn.appendChild(incrementOrderBtn);

    const orderCount = new OrderCount();
    orderCount.setCount();
    const orderCountSpan = orderCount.getOrderCounterSpan();
    this.activeCartBtn.appendChild(orderCountSpan);

    const decrementOrderBtn = new DecrementOrderBtn("/assets/images/icon-decrement-quantity.svg").getOrderBtn();
    this.activeCartBtn.appendChild(decrementOrderBtn);
  }
}

class OrderCount {
  #orderCount = 0;
  #color = " hsl(13, 31%, 94%)";
  #fontFamily = "RedHat-SemiBold";

  constructor() {
    this.counterSpan = document.createElement("span");
  }

  #styleOrderCounterSpan() {
    this.counterSpan.classList.add("order-count-span");
    this.counterSpan.style.color = this.#color;
    this.counterSpan.style.fontFamily = `var(--${this.#fontFamily})`;
  }

  incrementOrderCount() {
    this.#orderCount++;
  }

  decrementOrderCount() {
    this.#orderCount--;
  }

  getOrderCount() {
    return this.#orderCount;
  }

  setCount() {
    this.counterSpan.innerText = this.getOrderCount();
  }

  getOrderCounterSpan() {
    this.setCount();
    this.#styleOrderCounterSpan();

    return this.counterSpan;
  }
}

class OrderBtn {
  #btnSize = "15px";
  #borderColor = "hsl(13, 31%, 94%)";
  constructor(imgSrc) {
    this.OrderBtn = document.createElement("button");
    this.imgSrc = imgSrc;
  }

  #appendIcon(imgSrc) {
    let incrementIcon = document.createElement("img");
    incrementIcon.src = imgSrc;
    incrementIcon.style.width = "8px";

    this.OrderBtn.appendChild(incrementIcon);
  }

  #styleOrderBtn() {
    this.#appendIcon(this.imgSrc);

    this.OrderBtn.style.width = this.#btnSize;
    this.OrderBtn.style.height = this.#btnSize;
    this.OrderBtn.style.border = `1px solid ${this.#borderColor}`;
    this.OrderBtn.style.padding = "3px";
    this.OrderBtn.style.borderRadius = "50%";
  }

  getOrderBtn() {
    this.#styleOrderBtn();

    return this.OrderBtn;
  }
}

class IncrementOrderBtn extends OrderBtn {
  constructor(imgSrc) {
    super(imgSrc);
  } 
}

class DecrementOrderBtn extends OrderBtn {
  constructor(imgSrc) {
    super(imgSrc);
  }
}


//funtion to create active cart button
function createActiveCartBtn(addcartBtn) {
  new ActiveCartBtn(addcartBtn).createActiveCartBtn();
}

//function to clear active cart buttons
function clearActiveCartBtns(addCartBtns) {
  addCartBtns.forEach((addCartBtn,index) => {
    const activeCartBtn  = addCartBtn.querySelector(`.${new ActiveCartBtn(addCartBtn).className}`); 
    if(activeCartBtn) {
      activeCartBtn.remove();
    }

    removeborderOnDessertImg(index);
  });
}

//function to handle all events on add cart buttons
function handleCartBtns() {
  let addCartBtns = document.querySelectorAll("[data-add-to-cart-btn]");

  addCartBtns.forEach((addCartBtn,index) => {
    addCartBtn.addEventListener("click",function() {
        borderOnDessertImg(index);
        createActiveCartBtn(this);
    });
  });
}

handleCartBtns();