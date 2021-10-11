const distance = parseInt(prompt("quanti chilometri vuoi percorrere?"));
const userAge = parseInt(prompt("quanti anni hai?"));
const userName = prompt("bonus: inserisci il tuo nome")
const userEmail = prompt("bonus: inserisci la tua email")
const price = distance * 0.21;
document.getElementById("age").textContent = userAge;
document.getElementById("km").textContent = distance;
document.getElementById("name").textContent = userName;
document.getElementById("email").textContent = userEmail;


 if (userAge < 18){
     var discount = price*20/100;
     document.getElementById("discount").textContent = discount.toFixed(2) + "$"
     var finalPrice = price - discount;
     document.getElementById("price").textContent = finalPrice.toFixed(2) + "$"
} else if (userAge > 65){
    var discount = price*40/100;
    document.getElementById("discount").textContent = discount.toFixed(2) + "$"
    var finalPrice = price - discount;
    document.getElementById("price").textContent = finalPrice.toFixed(2) + "$"

    
}else{
     document.getElementById("price").textContent = price.toFixed(2) + "$"
}