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
                                    <td><input disabled type="number" value="${cart.cartQuantity}"/></td>
                                    <td>${cart.cartQuantity * Number(cart.price)}</td>
                                </tr>

        `
    })

    document.querySelector(".summarySubTotalAmount").innerText = `$${totalAmount}`;
    document.querySelector("#shoppingOrder_total_cost").innerText = `$${totalAmount + 10}`;
}
const handleBuyclick=(e)=>{
    e.preventDefault()

    let user = fetchLoggedInUser()

    if(!user){
        alert(" you  need to login first ")
        return;
    }
    const cart = getCartItems()

    let orderPayload = {
        totalPrice :0,
    }
    if(cart.length>0){

    orderPayload.item= cart.map((p)=>{
      orderPayload.totalPrice+= Number(p.price) * Number(p.cartQuantity);
      return { buyQuantity: p.cartQuantity  ,  product  : p._id }
    })
       const buyPayload={
        ...orderPayload,
      buyer:user._id,
      address:document.querySelector("#shipping_address_input").value,
      number:document.querySelector("#shipping_phone_input").value,
    }

    buyProduct(buyPayload)
    }
}
const buyProduct=async(buyPayload)=>{

    try {
        const {status,data } =  await axios.post(`${backendUrl}/order/create`,buyPayload)
        
            if(status===200){
                removeAllCart()
                displayAllCarts()
                displayCartCount()
                document.querySelector("#shipping_address_input").value= ""
                document.querySelector("#shipping_phone_input").value = ""
                location.href=`${frontendUrl}/public/html/myDashboard.html?order=true`
            }
        
    } catch (error) {
            console.log(error)
    }


}
displayAllCarts()

document.querySelector(".summaryCart_summary_box").addEventListener("submit",handleBuyclick)


document.querySelector(".clear_shoppingCart_btn").addEventListener("click",()=>{
    removeAllCart()
    displayAllCarts()
    displayCartCount()
})


