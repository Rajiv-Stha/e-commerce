let cartItem = getCartItems();

const displayAllCarts = () => {
  cartItem = getCartItems();

  if (!cartItem.length) {
    document.querySelector(".shoppingCart_innerContent").style.display = "none";
    document.querySelector(".empty_shopping_cart_content").style.display =
      "flex";
  } else {
    document.querySelector(".shoppingCart_innerContent").style.display = "flex";
    document.querySelector(".empty_shopping_cart_content").style.display =
      "none";
  }

  let totalAmount = 0;

  if (!cartItem.length) {
    document.querySelector(".buyNowButton").innerText = "Your cart is empty";
  }
  document.querySelector(".shoppingCartProductList").innerHTML = "";

  cartItem.forEach((cart) => {
    totalAmount += cart.cartQuantity * Number(cart.price);
    document.querySelector(".shoppingCartProductList").innerHTML += `
                                <tr>
                                    <td >
                                    <div class="shoppingCart_item_name_box">
                                        <div class="shoppingCart_item_img_box">
                                            <img  src=${
                                              cart.image[0]
                                            } alt="item">
                                        </div>
                                    <p class="shopping_item_para">${
                                      cart.name
                                    }</p>
                                    </div>
                                    </td>
                                    <td>${cart.price}</td>
                                    <td><input disabled type="number" value="${
                                      cart.cartQuantity
                                    }"/></td>
                                    <td>${
                                      cart.cartQuantity * Number(cart.price)
                                    }</td>
                                </tr>
        `;
  });

  document.querySelector(
    ".summarySubTotalAmount"
  ).innerText = `$${totalAmount}`;
  document.querySelector("#shoppingOrder_total_cost").innerText = `$${
    totalAmount + 10
  }`;
};
const handleBuyclick = (e) => {
  e.preventDefault();
  let user = fetchLoggedInUser();

  if (!user) {
    alert(" you  need to login first ");
    return;
  }

  if (!cartItem.length) {
    alert("Your cart is empty");
    return;
  }
  let shippingPayload = {
    address: document.querySelector("#shipping_address_input").value,
    number: document.querySelector("#shipping_phone_input").value,
  };

  localStorage.setItem("shippingDetails", JSON.stringify(shippingPayload));
  location.href = `${frontendUrl}/public/html/checkout.html`;
};

displayAllCarts();

document
  .querySelector(".summaryCart_summary_box")
  .addEventListener("submit", handleBuyclick);

document
  .querySelector(".clear_shoppingCart_btn")
  .addEventListener("click", () => {
    removeAllCart();
    displayAllCarts();
    displayCartCount();
  });

if (fetchLoggedInUser()) {
  document.querySelector(".shoppingCartLoginButton").style.display = "none";
  document.querySelector(".buyNowButton").style.display = "block";
} else {
  document.querySelector(".shoppingCartLoginButton").style.display = "block";
  document.querySelector(".buyNowButton").style.display = "none";
}
