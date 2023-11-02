const fetchAllProducts =async()=>{
    try {
       const {data,status} = await axios.get("http://localhost:8000/api/product");  

      
            data.message.forEach(product=>{


                const productCardHtml = document.createElement("a");
                productCardHtml.href = `http://localhost:5500/frontend/public/html/productDetail.html?productId=${product._id}`
                productCardHtml.classList.add("newProducts_card");


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
                <p>${product.desc}</p>
                <p>All-In-One</p>
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

                addToCartButton.addEventListener("click", () => handleAddToCart(product));
                productCardHtml.append(addToCartButton)

               



                document.querySelector(".homeAllProducts").appendChild(productCardHtml);

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