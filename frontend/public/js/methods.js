 const getCartItems=()=>{
    let cart = localStorage.getItem("cart");
    if(cart){
        cart = JSON.parse(cart)
    }
    return cart ?? []
}



const checkIfAlreadyExist=(product)=>{


    const allProducts=getCartItems();
    return  allProducts.some(p=>p._id  ===product._id);



}

 const addToCart=(newCart)=>{

    let prev = getCartItems()
    let allProducts =[]

    if(checkIfAlreadyExist(newCart)){
       allProducts =  prev.map((prod)=>{
             if(prod._id===newCart._id){
                return {...prod,cartQuantity:Number(prod.cartQuantity) + Number(newCart.cartQuantity) }
             }else{
                return prod
             }
        })
    }else{
        allProducts = [...prev,newCart]
    }
    console.log("setting",newCart)
    localStorage.setItem("cart",JSON.stringify(allProducts))
}
function removeAllCart(){
    localStorage.removeItem("cart")
}