
let frontendUrl = "https://miralimammad.netlify.app";
// let frontendUrl = "http://localhost:5500/frontend" 
// let backendUrl = "https://ecommerce-dxp5.onrender.com/api";
let backendUrl = "http://localhost:8000/api"



const displayCartCount=()=>{
    document.querySelector(".cartCount").innerText = getCartItems().length;
}
const fetchLoggedInUser =()=>{
    let user = localStorage.getItem("user");
    if(user){
        user = JSON.parse(user)
    }
    return user ?? null;

}
const displayLoginUser=()=>{
    if(fetchLoggedInUser()){
        let user = fetchLoggedInUser()
        if(document.querySelector(".navbar_loginBtn")){
            document.querySelector(".navbar_loginBtn").style.display = "none"
        }
        document.querySelector(".userImg").style.display = "block"
        document.querySelector(".userImg").src =user.image;
    }else{
document.querySelector(".navbar_loginBtn").style.display="block"
        document.querySelector(".userImg").style.display = "none"
    }
}
displayLoginUser()
displayCartCount()
