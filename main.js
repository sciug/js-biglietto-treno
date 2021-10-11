const distance = parseInt(prompt("quanti chilometri vuoi percorrere?"));
const userAge = parseInt(prompt("quanti anni hai?"));
const price = distance * 0.21;
document.getElementById("age").textContent = userAge;
document.getElementById("km").textContent = distance


 if (userAge < 18){
     var discount = price*20/100;
     console.log("discount equals:" + discount);
     document.getElementById("discount").textContent = discount
     var finalPrice = price - discount;
     console.log("Final price equals: " + finalPrice.toFixed(2));
     document.getElementById("price").textContent = finalPrice.toFixed(2)
} else if (userAge > 65){
    var discount = price*40/100;
    console.log("discount equals:" + discount);
    document.getElementById("discount").textContent = discount
    var finalPrice = price - discount;
    console.log("Final price equals: " + finalPrice.toFixed(2));
    document.getElementById("price").textContent = finalPrice.toFixed(2)

    
}else{
    console.log(price)
     document.getElementById("price").textContent = price.toFixed(2)
}