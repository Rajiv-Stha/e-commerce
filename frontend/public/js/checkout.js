

console.log(shippingDetails)
const displayCarItem=()=>{
    const cart = getCartItems();
    const shippingDetails = JSON.parse (localStorage.getItem("shippingDetails"))
    let totalAmount = 0;

    cart.forEach(c=>{
        totalAmount += c.cartQuantity * Number(c.price);
        document.querySelector(".productsDetails").innerHTML+=`
                         <div class="productItem">
                                <p class="productName">Monitor 24inch widescreen lovely hai feri</p>
                                <p class="productCount">x${c.cartQuantity}</p>
                            </div>  
        `
    })
    document.querySelector(".summarySubTotalAmount").innerText = `$${totalAmount}`;
    document.querySelector(".number").innerText = shippingDetails.number
    document.querySelector(".address").innerText = shippingDetails.address

}

displayCarItem()


const handleBuyclick=(e)=>{
    e.preventDefault()


    let user = fetchLoggedInUser()

    if(!user){
        alert(" you  need to login first ")
        return;
    }
    location.href = `${frontendUrl}/public/html/checkout.html`
     const cart = getCartItems()

    let orderPayload = {
        totalPrice :0,
        address:shippingDetails.address,
        number:shippingDetails.number,
    }

    if(cart.length>0){
      orderPayload.item= cart.map((p)=>{
      orderPayload.totalPrice+= Number(p.price) * Number(p.cartQuantity);
      return { buyQuantity: p.cartQuantity  ,  product  : p._id }
    })
 
}
}