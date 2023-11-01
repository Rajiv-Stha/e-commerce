const fetchAllProducts =async()=>{
    try {
       const {data,status} = await axios.get("http://localhost:8000/api/product");  

      
            data.message.forEach(product=>{

                let productCardHtml =  `
                
                <a href='http://localhost:5500/frontend/public/html/productDetail.html?productId=${product._id}' class="newProducts_card">
                
                <p class="newProducts_stockInfo_para">✅ in stock</p>
                <div class="newProducts_imgWrapper">
                <img class="newProducts_Img" src=${product.image[0]}>
                </div>
                <div class="newProduct_review_box">
                Reviews
                </div>
                <div class="newProduct_details">
                <p>${product.name}</p>
                <p>${product.desc}</p>
                <p>All-In-One</p>
                </div>
                <div class="newProduct_priceBox">
                <h2 class="newProduct_price">$${product.price}</h2>
                </div>
               
                </a>
                
                `
                document.querySelector(".homeAllProducts").innerHTML += productCardHtml;
                
                            const addToCartButton = document.createElement("button");
                            addToCartButton.className = "addToCart_btn";
                            addToCartButton.innerHTML = `
                                <img src="./public/icons/cartIconBLue.png" alt="cart">
                                <p>Add to Cart</p>
                            `;
                            addToCartButton.addEventListener("click", () => handleAddToCart(product));
                            
                            // Append the button to the product card
                            const productCard = document.querySelector(".newProducts_card");
                            productCard.appendChild(addToCartButton);

            })






            addEventToAddToCart()

    } catch (error) {
            console.log(error)
    }
}
fetchAllProducts()
const handleAddToCart=() =>{

}
const addEventToAddToCart=()=>{

    document.querySelectorAll(".addToCart_btn").forEach(btn=>{
        btn.addEventListener("click",handleAddToCart)
    })

}