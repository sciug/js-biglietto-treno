/* const distance = parseInt(prompt("quanti chilometri vuoi percorrere?"));
const userAge = parseInt(prompt("quanti anni hai?"));
const userName = prompt("bonus: inserisci il tuo nome")
const userEmail = prompt("bonus: inserisci la tua email") */

const distance = document.getElementById("distance")
const age = document.getElementById("age")
const email= document.getElementById("email")
const fullName = document.getElementById("full-name")




const generate = document.getElementById("generate")
const cancel = document.getElementById("cancel")


generate.addEventListener("click", function(){
     const price = distance.value * 0.21;
     document.getElementById("T-age").textContent = age.value
     document.getElementById("T-km").textContent = distance.value
     document.getElementById("T-name").textContent = fullName.value
     document.getElementById("T-email").textContent = email.value
     document.getElementById("train_code").textContent = Math.floor(Math.random() * 1000000) + 100000;
     const ticket=document.getElementById("ticket")
     ticket.classList.remove("none")
     const barCodeContainer = document.getElementById("bar_code")
     for(let i=0; i < 30; i++){
          let singleBar = `<div class="bar bar-${i}"></div>`
          barCodeContainer.insertAdjacentHTML("beforeend", singleBar)
          let randomWidth = Math.floor(Math.random() * 5 +1);
          barWidth = document.getElementsByClassName("bar")
          barWidth[i].style.width=`${randomWidth}px`
          barWidth[i].classList.add("margin_bar")
    
         
     } 


     if (age.value == "young"){
          var discount = price*20/100;
          document.getElementById("discount").textContent = discount.toFixed(2) + "$"
          var finalPrice = price - discount;
          document.getElementById("price").textContent = finalPrice.toFixed(2) + "$"
     } else if (age.value == "senior"){
         var discount = price*40/100;
         document.getElementById("discount").textContent = discount.toFixed(2) + "$"
         var finalPrice = price - discount;
         document.getElementById("price").textContent = finalPrice.toFixed(2) + "$"
     
         
     }else{
          document.getElementById("price").textContent = price.toFixed(2) + "$"
     }

})







cancel.addEventListener("click",  function(){
     const ticket=document.getElementById("ticket")
     ticket.classList.add("none")

     document.getElementById("T-age").textContent = ""
     document.getElementById("T-km").textContent = ""
     document.getElementById("T-name").textContent = ""
     document.getElementById("T-email").textContent = ""
     document.getElementById("train_code").textContent = ""
     document.getElementById("discount").textContent = "none"
     document.getElementById("price").textContent = ""
     distance.value = ""
     age.value = "adult"
     email.value= ""
     fullName.value = "" 
     const barCodeContainer = document.getElementById("bar_code")
     for(let i=0; i < 30; i++){
          let singleBar = `<div class="bar bar-${i}"></div>`
          barCodeContainer.insertAdjacentHTML("beforeend", singleBar)
          let randomWidth = Math.floor(Math.random() * 5 +1);
          barWidth = document.getElementsByClassName("bar")
          barWidth[i].style.width=`0px`
    
         
     } 
})
 