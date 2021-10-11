const distance = parseInt(prompt("quanti chilometri vuoi percorrere?"));
const userAge = parseInt(prompt("quanti anni hai?"));
const price = distance * 0.21


 if (userAge < 18){
     var discount = price*20/100;
     console.log("discount equals:" + discount);
     var finalPrice = price - discount;
     console.log("Final price equals: " + finalPrice.toFixed(2));
} else if (userAge > 65){
    var discount = price*40/100;
    console.log("discount equals:" + discount);
    var finalPrice = price - discount;
     console.log("Final price equals: " + finalPrice.toFixed(2));
    
}else{
    var finalPrice = price - discount;
     console.log("Final price equals: " + finalPrice.toFixed(2));
}