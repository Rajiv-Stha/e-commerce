
let frontendUrl = "https://miralimammad.netlify.app";
// let frontendUrl = "http://localhost:5500/frontend" 
let backendUrl = "https://ecommerce-dxp5.onrender.com/api";
// let backendUrl = "http://localhost:8000/api"



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
const fetchTopSellingProopducts=async()=>{

            // topSelling

             try {
            const {data,status} =  await axios.get(`${backendUrl}/product/topSelling`)
            data.message.forEach((product)=>{

                const productCardHtml = document.createElement("div");
                productCardHtml.classList.add("newProducts_card");
                productCardHtml.addEventListener("click",()=>{
                    location.href=  `${frontendUrl}/public/html/productDetail.html?productId=${product._id}`
                })
                productCardHtml.innerHTML = `
                <p class="newProducts_stockInfo_para">✅ in stock</p>
                <div class="newProducts_imgWrapper">
                <img class="newProducts_Img" src=${product.image[0]}>
                </div>
                <div class="newProduct_review_box">
                Reviews
                </div>
                <div class="newProduct_details">
                <p>${product.name}</p>
                <p class="productDesc">${product.desc}</p>
            
                </div>
                <div class="newProduct_priceBox">
                <h2 class="newProduct_price">$${product.price}</h2>
                </div>
                `
                const addToCartButton = document.createElement("button");
                addToCartButton.className = "addToCart_btn";
                addToCartButton.innerHTML = `
                    <img src="./public/icons/cartIconBLue.png" alt="cart">
                    <p>Add to Cart</p>
                `;

                addToCartButton.addEventListener("click",(e)=>handleAddToCart(e,product))
                productCardHtml.append(addToCartButton)
                document.querySelector("#topSellingWrapper").appendChild(productCardHtml);
                
            })
    } catch (error) {
        
    }


   
}