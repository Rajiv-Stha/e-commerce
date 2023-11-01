export const getCartItems=()=>{
    let cart = localStorage.getItem("cart");
    if(cart){
        cart = JSON.parse(cart)
    }
    return cart ?? []

}
export const addToCart=(newCart)=>{
    let prev = getCartItems()
    const  allCarts = [...prev,newCart]
    localStorage.setItem("cart",JSON.stringify(allCarts))

}