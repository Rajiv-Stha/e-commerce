
let frontendUrl = "http://localhost:5500/frontend";
let backendUrl = "http://localhost:8000/api";


const displayCartCount=()=>{
    document.querySelector(".cartCount").innerText = getCartItems().length;
}
displayCartCount()