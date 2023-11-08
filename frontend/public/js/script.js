
let frontendUrl = "http://localhost:5500/frontend";
let backendUrl = "http://localhost:8000/api";


const displayCartCount=()=>{
    document.querySelector(".cartCount").innerText = getCartItems().length;
}
const fetchLoggedInUser =()=>{
    let user = localStorage.getItem("user");
    if(user){
        user = JSON.stringify(user)
    }

    return user ?? null;

}
const displayLoginUser=()=>{

    if(fetchLoggedInUser()){
        document.querySelector(".navbar_loginBtn").style.display="none"
        document.querySelector(".userImg").style.display = "block"
    }else{
document.querySelector(".navbar_loginBtn").style.display="block"
        document.querySelector(".userImg").style.display = "none"
    }

}
displayLoginUser()
displayCartCount()
