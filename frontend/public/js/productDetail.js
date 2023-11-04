const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("productId");
let currenTab = "about"
let userQuantity = 1;
let productData = {};

const getProductById = async () => {
  try {
    const {  data } = await axios.get(
      `https://ecommerce-dxp5.onrender.com/api/product?_id=${productId}`
    );
    productData= data.message[0]
    console.log(productData)
    displayProductData()
  } catch (error) {
    console.log(error);
  }
};

getProductById()

const displayProductData =()=>{
    document.querySelector(".product-price").innerText = productData.price
    
    document.querySelector(".productDetailImage").src = productData.image[0]
    handleDetailsTab() 
} 
const handleDetailsTab=()=>{

  document.querySelectorAll(".details_tab").forEach(tab=>{
    tab.classList.remove("activeDetailsTab")
  })
  if(currenTab==="about"){
    document.querySelector(".productDetail_spec_list").innerHTML = ""
    document.querySelector(".product-name").innerText =productData.name;
    document.querySelector(".product-detail-info").innerText = productData.desc;
    document.querySelector("#about").classList.add("activeDetailsTab")

  }else{
    document.querySelector(".product-name").innerText =""
    document.querySelector(".product-detail-info").innerText = ""
    document.querySelector("#details").classList.add("activeDetailsTab")
    productData.specs.forEach(sp=>{
      document.querySelector(".productDetail_spec_list").innerHTML += `
      
          <li>

          ${sp}
          
          </li>
      `
  })
  }
}

const handleAddToCart=()=>{
  const cartQuantity = document.querySelector(".addToCartQuantityInput").value
  alert(cartQuantity)
  const cartDatat = {...productData,cartQuantity:Number(cartQuantity)}
  addToCart(cartDatat);
}
const handleEventHandlerToDetailsTab=()=>{
  document.querySelectorAll(".details_tab").forEach(tab=>{
    console.log("hey")
    tab.addEventListener("click",handleDetailsTabChange)
  })
}
const handleEventHandlerToAddToCartButton=()=>{
  document.querySelector(".addToCard_button_product").addEventListener("click",handleAddToCart)
}

const handleDetailsTabChange=(e)=>{

  const tabName = e.target.getAttribute("id")
  currenTab = tabName
  handleDetailsTab()



  
}


handleEventHandlerToAddToCartButton()
handleEventHandlerToDetailsTab()



