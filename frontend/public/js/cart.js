const displayAllCarts =()=>{
    let totalAmount = 0 ;
     document.querySelector(".shoppingCartProductList").innerHTML  = ""
    getCartItems().forEach(cart=>{
        totalAmount += cart.cartQuantity * Number(cart.price);
        document.querySelector(".shoppingCartProductList").innerHTML  +=`

                                <tr>
                                    <td >
                                    <div class="shoppingCart_item_name_box">
                                        <div class="shoppingCart_item_img_box">
                                            <img  src=${cart.image[0]} alt="item">
                                        </div>
                                    <p>${cart.name}</p>
                                    </div>
                                    </td>
                                    <td>${cart.price}</td>
                                    <td><input type="number" value="${cart.cartQuantity}"/></td>
                                    <td>${cart.cartQuantity * Number(cart.price)}</td>
                                </tr>

        `
    })

    document.querySelector(".summarySubTotalAmount").innerText = `$${totalAmount}`;
    document.querySelector("#shoppingOrder_total_cost").innerText = `$${totalAmount + 10}`;
}
displayAllCarts()

document.querySelector(".clear_shoppingCart_btn").addEventListener("click",()=>{
    removeAllCart()
    displayAllCarts()
})


