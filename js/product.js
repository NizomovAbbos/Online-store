const API_PATH = 'http://localhost:5000/';

const productForm = document.querySelector('.js-product-form');

const productName = productForm.querySelector(".js-product-name");
const productDesc = productForm.querySelector(".js-product-desc");
const productImg = productForm.querySelector(".js-product-img");
const productPrice = productForm.querySelector(".js-product-price");

async function newProduct(){
    try {
      const res = await fetch(`${API_PATH}product`,{
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_name: productName.value,
          product_desc: productDesc.value,
          product_img: productImg.value,
          product_price: productPrice.value,
        }),
      });
      const data = await res.json();
      if (data){
        console.log("Yangi mahsulot sotuvga qo'yildi")
        // window.localStorage.setItem("token", data.token);
        window.location.href = "index.html";
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
};
  
productForm.addEventListener("submit", (evt) => {
 evt.preventDefault();
 newProduct();
});

