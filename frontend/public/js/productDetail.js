const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("productId");
let productData = {};

const getProductById = async () => {
  try {
    const { status, data } = await axios.get(
      `http://localhost:8000/api/product?_id=${productId}`
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
    document.querySelector(".product-name").innerText =productData.name;
    document.querySelector(".productDetailImage").src = productData.image[0]
    productData.specs.forEach(sp=>{

        document.querySelector(".productDetail_spec_list").innerHTML += `
        
            <li>

            ${sp}
            
            </li>
        `
    })
}