
let frontendUrl = "https://miralimammad.netlify.app";
let backendUrl = "https://ecommerce-dxp5.onrender.com/api";


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

        if(document.querySelector(".navbar_loginBtn")){
            document.querySelector(".navbar_loginBtn").style.display = "none"
        }
       
        document.querySelector(".userImg").style.display = "block"
    }else{
document.querySelector(".navbar_loginBtn").style.display="block"
        document.querySelector(".userImg").style.display = "none"
    }

}
displayLoginUser()
displayCartCount()
