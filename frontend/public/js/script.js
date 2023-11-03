const displayCartCount=()=>{
    document.querySelector(".cartCount").innerText = getCartItems().length;
}
displayCartCount()