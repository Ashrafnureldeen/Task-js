var allproducts = document.querySelectorAll(".div1")
var content = document.querySelector("#content")
var btn = document.querySelector("#btn")
var image =document.querySelectorAll("img")
var price =document.querySelector("#total")
var totalprice = 0


allproducts.forEach (function(item){
item.onclick=function(){
    totalprice += +(item.getAttribute("price"))
    content.innerHTML+=item.textContent +"+++++"
    

    if (content.innerHTML != "" ){
       btn.style.display ="block"
       price.style.display ="block"
    }
}

})
btn.onclick = function(){
    price.innerHTML=totalprice + "  LE"
  
}