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
        location.href = `${frontendUrl}/public/html/checkout.html`

        let shippingPayload = {
        address : document.querySelector("#shipping_address_input").value,
        number : document.querySelector("#shipping_phone_input").value
        }

        localStorage.setItem("shippingDetails",JSON.stringify(shippingPayload));
        

     }



const buyProduct=async(buyPayload)=>{

    try {
        const {status,data } =  await axios.post(`${backendUrl}/order/create`,buyPayload)
        
            if(status===200){
                showToast("success", "Product bought successfully");
                removeAllCart()
                displayAllCarts()
                displayCartCount()
                document.querySelector("#shipping_address_input").value= ""
                document.querySelector("#shipping_phone_input").value = ""
                setTimeout(()=>{
                    location.href=`${frontendUrl}/public/html/myDashboard.html?order=true`
                },2000)
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



if(fetchLoggedInUser()){
    document.querySelector(".shoppingCartLoginButton").style.display="none"
    document.querySelector(".buyNowButton").style.display="block"

}else{
    document.querySelector(".shoppingCartLoginButton").style.display="block"
    document.querySelector(".buyNowButton").style.display="none"
}

