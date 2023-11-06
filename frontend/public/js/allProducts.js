let category=""
let pricing = 0 ;
let min  =0;
let max= 0;

const fetchAllCategory=async()=>{
    try {

       const {data,status} = await axios.get(`${backendUrl}/product/category`);
       console.log(data)
        if(status===200){
            data.message.forEach(cat=>{
                document.querySelector(".categoryList").innerHTML+=`

                <div class="allProducts_filter_lists_items">
                <p>${cat}</p>
                <p>22</p>
            </div>
                
                `

            })
        }

    } catch (error) {

        console.log(error)
        
    }
}
const fetchDataWithFilter=async()=>{
  try { 

   const {data,status} = await axios.get(`${backendUrl}/product/find?category=${category}&min=${min}&max=${max}`);
    if(status===200){
        
        data.message.forEach(product=>{


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

               



                document.querySelector(".allProducts_card_wrapper").appendChild(productCardHtml);

        })
    }
  } catch (error) {
        console.log(error)
  }
}
fetchAllCategory();
fetchDataWithFilter()