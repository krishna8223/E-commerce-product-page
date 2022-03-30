'use strict'

const cross = document.querySelector(".cross h2");
const model = document.getElementsByClassName("model")[0];
const main_image = document.getElementsByClassName("main_image")[0];
const main_model_image = document.querySelector(".main_model_image > img");
const all_main_images = [...document.querySelectorAll(".all_main_images img")];
const all_model_images = [
  ...document.querySelectorAll(".all_model_images img"),
];
const price = document.getElementsByClassName("price")[0];
const cart = document.getElementsByClassName("cart")[0];
const cart_items = document.getElementsByClassName("cart_items")[0];
const final_price = document.getElementsByClassName("final_price")[0];
const empty = document.getElementsByClassName("empty")[0];
const fill = document.getElementsByClassName("fill")[0];
const links = document.getElementsByClassName("links")[0];
const cart_item_no = document.getElementsByClassName("cart_item_no")[0];
let image = 0;



all_main_images.forEach((image) => {
  image.classList.remove("click");
  image.addEventListener("click", (e) => {
    removeActiveClass(all_main_images);
    image.classList.add("active");
    main_image.src = image.src;
  });
});

all_model_images.forEach((img, i) => {
  img.addEventListener("click", (e) => {
    removeActiveClass(all_model_images);
    img.classList.add("active");
    main_model_image.src = img.src;
    image = i;
  });
});

function removeActiveClass(image) {
  image.forEach((image) => {
    image.classList.remove("active");
  });
}

main_image.addEventListener("click", (e) => {
  model.style.right = "0";
});
cross.addEventListener("click", (e) => {
  model.style.right = "-100vw";
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    model.style.right = "-100vw";
  }
});

const change = (button) => {
  if (button == "next") {
    image++;
    removeActiveClass(all_model_images);
    if (image >= all_model_images.length) {
      image = 0;
    }
    main_model_image.src = all_model_images[image].src;
    all_model_images[image].classList.add("active");
  } else {
    if (image <= 0) {
      image = all_main_images.length;
    }
    image--;
    removeActiveClass(all_model_images);
    main_model_image.src = all_model_images[image].src;
    all_model_images[image].classList.add("active");
  }
};
const changeMainImage = (button) => {
  if (button == "next") {
    image++;
    removeActiveClass(all_main_images);
    if (image >= all_main_images.length) {
      image = 0;
    }
    main_image.src = all_main_images[image].src;
    all_main_images[image].classList.add("active");
  } else {
    if (image <= 0) {
      image = all_main_images.length;
    }
    image--;
    removeActiveClass(all_model_images);
    main_image.src = all_main_images[image].src;
    all_main_images[image].classList.add("active");
  }
};
const select_items = (activity) => {
  if (activity == "plus") {
    price.innerHTML = parseInt(price.innerHTML) + 1;
  } else {
    if (price.innerHTML <= 0) {
      return;
    }
    price.innerHTML = price.innerHTML - 1;
  }
};

cart.onclick = (e) => {
  cart_items.classList.toggle("show");
};

const addtocart = () => {
  if (price.innerHTML == 0) {
    return;
  }
  fill.style.display = "flex";
  empty.style.display = "none";
  final_price.innerHTML = `$125.00 x ${price.innerHTML} <strong>$${
    125 * price.innerHTML
  }.00</strong>`;
  cart_item_no.innerHTML = price.innerHTML

};

const delete_cart = () => {
  empty.style.display = "block";
  fill.style.display = "none";
  cart_item_no.innerHTML = 0

};

const closeNav = () => {
  links.classList.toggle("show_nav");
};
