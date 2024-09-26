
let pitchTitleInput = document.getElementById("pitch-title");
// let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-Category");



let mainSection = document.getElementById("data-list-wrapper");

let productData = [];

function  fetchData(){


    fetch("http://localhost:3000/products")
    .then((res)=>res.json())
    .then((data)=>{
        showData(data)
   
        
      
})
    }
    fetchData();

    function showData(thData)
{
    let show = thData.map((el)=>
        getDatat(el.image,el.description,el.price,el.title),

    )
  mainSection.innerHTML=show.join(" ")
}

function getDatat(image,description,price,title){
    let mainData=`    
    
    
           


<div class="swiper-container mySwiper">
  <div class="swiper-wrapper">

    <div class="swiper-slide d-flex">
      <div class="product-card">
   
<a href="description.html?image=${encodeURIComponent(image)}&title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&price=${encodeURIComponent(price)}">

<img src=${image}  alt="" style = "height : 300px">
<a>
  

  <h5 id="pitch-title" style = "padding-top : 15px;">${title}</h5>
  <p id="pitch-price" style = "font-size : 20px; font-weight : bold; color: red;">${price}</p>
  <p id="pitch-description">${description}</p>

      
      
      </div>
    </div>
  </div>
</div>
 
              `

          return mainData



}

console.log(mainSection)






var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  