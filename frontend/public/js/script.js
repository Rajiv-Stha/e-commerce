
// let frontendUrl = "https://miralimammad.netlify.app";
let frontendUrl = "http://localhost:5500/frontend" 
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

document.querySelector(".searchModalInput").addEventListener("change",async(e)=>{
    const {data,status} = await  axios.get(`${backendUrl}/product/search?search_query=${e.target.value}`)
      document.querySelector(".modalSearchItemWrapper").innerHTML = ""
    data.message.forEach((p)=>{

        document.querySelector(".modalSearchItemWrapper").innerHTML+=`
                <a href="${frontendUrl}/public/html/productDetail.html?productId=${p._id}" class="searchedProducts">
                        <img class="searchProductImg" src=${p.image[0]} alt="">
                        <div class="productInfo">
                            <p class="searchProductName">${p.name} </p>
                            <p>In stock - 5</p>
                            <p class="searchProductPrice">$${p.price}</p>
                        </div>
                    </a>
        `

    })

})

document.querySelector(".nav_searchIcon").addEventListener("click",()=>{
    document.querySelector(".searchModal").style.display="flex"
})
document.querySelector(".closeModalButton").addEventListener("click",()=>{
    document.querySelector(".searchModal").style.display="none"
})