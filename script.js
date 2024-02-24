var products = [
  {
    name: "Headset",
    headline: "Wireless Headset",
    price: "12,000",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Dove Cream",
    headline: "Beauty Cream",
    price: "1000",
    image:
      "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sports Shoe",
    headline: "Best Choice",
    price: "5,000",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

function cardProducts() {
  var clutter = "";
  products.forEach(function (item, index) {
    clutter += `<div class="card">
            <img data-index="${index}"
              src="${item.image}"
              alt=""
            />
            <h3>${item.name}</h3>
            <h4>$${item.price}<i data-index="${index}" class="add ri-add-circle-fill"></i></h4>
          </div>`;
  });
  document.querySelector(".cards").innerHTML = clutter;
}

var cart = [];
function addtoCart() {
  document
    .querySelector(".cards")
    .addEventListener("click", function (details) {
      if (details.target.classList.contains("add")) {
        cart.push(products[details.target.dataset.index]);
        showCart();
      }
      // console.log(cart);
    });
}

function showCart() {
  var clutter = "";
  document
    .querySelector(".cart-icon")
    .addEventListener("click", function () {});
  cart.forEach(function (product, index) {
    clutter += `<h2>${product.name}</h2>`;
  });
  document.querySelector(".items").innerHTML = clutter;

  document.addEventListener("click", function (event) {
    // Check if the click event originated from the cart icon
    if (event.target.closest(".cart-icon")) {
      // If it's the cart icon, show the cart and display the items
      showCart();
      document.querySelector(".items").style.display = "block";
    } else {
      // If the click is somewhere else, hide the items
      document.querySelector(".items").style.display = "none";
    }
  });
}

addtoCart();
cardProducts();
