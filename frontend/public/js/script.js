
let frontendUrl = "http://localhost:5500/frontend"



const displayCartCount=()=>{
    document.querySelector(".cartCount").innerText = getCartItems().length;
}
displayCartCount()