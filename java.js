// async await hamisha function ka sth use hota hy
// await hamisha asynchronous function ka andr hota hy

const products =document.querySelector(".products")
async function hello(){
    try{
        const responseObject = await fetch("https://fakestoreapi.com/products")
            
        const data = await responseObject.json()
        return data;
    }catch(err){
        console.log("Failed! To fetch the data of products", err);
    }
}

const res = hello();
res.then((resolve)=>{
    for(let product of resolve){
        // console.log(product);
      const cards = document.createElement("div")
      cards.classList.add("card")
      cards.innerHTML= `
      <img width="240px" src="${product.image}" />
      <h4>${product.title}</h4>,
      <p> ${product.price}</p>  
      <button>Add To Cart</button>`

     products.appendChild(cards)

    }
    
})








