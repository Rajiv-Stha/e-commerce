const fetchAllProducts =async()=>{
    try {
       const {data} = await axios.get("https://ecommerce-dxp5.onrender.com/api/product");  

      
            data.message.forEach(product=>{


                const productCardHtml = document.createElement("div");
                productCardHtml.classList.add("newProducts_card");
                productCardHtml.addEventListener("click",()=>{
                    location.href=  `https://miralimammad.netlify.app/public/html/productDetail.html?productId=${product._id}`
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

                addToCartButton.addEventListener("click",(e)=>handleAddToCart(e,product))
                productCardHtml.append(addToCartButton)

               



                document.querySelector(".homeAllProducts").appendChild(productCardHtml);

            })







    } catch (error) {
            console.log(error)
    }
}


fetchAllProducts()


const handleAddToCart=(event,product) =>{
    event.stopPropagation()
    let cartData = {...product,cartQuantity:1}
    addToCart(cartData);
}
const FetchAllMonitors=async()=>{


    try {
          const {data,status} =  await axios.get("https://ecommerce-dxp5.onrender.com/api/product?subCategory=Monitor")
            data.message.forEach((product)=>{
                


                const productCardHtml = document.createElement("div");
                productCardHtml.classList.add("newProducts_card");
                productCardHtml.addEventListener("click",()=>{
                    location.href=  `https://miralimammad.netlify.app/public/html/productDetail.html?productId=${product._id}`
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

                addToCartButton.addEventListener("click",(e)=>handleAddToCart(e,product))
                productCardHtml.append(addToCartButton)

               



                document.querySelector(".allMonitors").appendChild(productCardHtml);
                
            })

    } catch (error) {
        
    }

}
const FetchAllLaptops=async()=>{

    try {
               const {data,status} =  await axios.get("https://ecommerce-dxp5.onrender.com/api/product?subCategory=Laptop")
            data.message.forEach((product)=>{
                


                const productCardHtml = document.createElement("div");
                productCardHtml.classList.add("newProducts_card");
                productCardHtml.addEventListener("click",()=>{
                    location.href=  `https://miralimammad.netlify.app/public/html/productDetail.html?productId=${product._id}`
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

                addToCartButton.addEventListener("click",(e)=>handleAddToCart(e,product))
                productCardHtml.append(addToCartButton)

               



                document.querySelector(".allLaptops").appendChild(productCardHtml);
                
            })
    } catch (error) {
        
    }

}
FetchAllLaptops()
FetchAllMonitors()