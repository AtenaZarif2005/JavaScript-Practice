// "Variable types"

// const nameOfShopping="digiKala";
// let name="airPods";
// name="Ipads";
// let price=100;
// let price=1000;
// let stockStatus=true;
// console.log(nameOfShopping);
// console.log(name);
// console.log(price);
// console.log(stockStatus);
// console.log(typeof nameOfShopping);
// console.log(typeof name);
// console.log(typeof price);
// console.log(typeof stockStatus);
//_____________________________________________________________________________________________________________________

// "Strings"

// let width="400px";
// console.log(parseInt(width));
// let massage=`new price is ${parseInt(width)+50}px`;
// console.log(massage);
// ____________________________________________________________________________________________________________________

// "User information"

// let numb1 = +prompt("number 1");
// console.log(numb1);
// let numb2 = +prompt("number 2");
// console.log(numb2);
// let numb3 = alert(numb1+numb2);
// console.log(numb3);
//____________________________________________________________________________________________________________________

// "Confirm method"

// let isSure = confirm("Are you sure you wanna delete your account?");
// console.log(isSure);

//____________________________________________________________________________________________________________________

// "Arthmetic operators"

// let numb1 = 20;
// let numb2 = 5;
// console.log(numb1+numb2);
// console.log(numb1-numb2);
// console.log(numb1%numb2);
// console.log(numb1/numb2);
// console.log(numb1**numb2);

//____________________________________________________________________________________________________________________

// "Comparison operators"

// let personWeight1 = +prompt("plz enter ur weight");
// let personHeight1 = +prompt("plz enter ur height");
// let personWeight2 = +prompt("plz enter ur weight");
// let personHeight2 = +prompt("plz enter ur height");
// let person1BMI = personWeight1 / (personHeight1**2);
// let person2BMI = personWeight2 / (personHeight2**2);
// console.log(person1BMI);
// console.log(person2BMI);
// console.log(person1BMI===person2BMI);
// console.log(person1BMI>=person2BMI);

//____________________________________________________________________________________________________________________

// "Conditinal operators"

// let time = 12;
// if(time>=22){
//     alert("Good midnight, Welcome'♡'.");
// }
// else if(time>=19){
//     alert("Good night, Welcome'♡'.");
// }
// else if(time>=16){
//     alert("Good evening, Welcome'♡'.");
// }
// else if(time>=11){
//     alert("Good afternoon, Welcome'♡'.");
// }
// else if(time>=6){
//     alert("Good morning, Welcome'♡'.");
// }
// else{
//     alert("Good midnight, Welcome'♡'.");
// }

//____________________________________________________________________________________________________________________

// "Assignment 1 "

// let priceOfProduct = +prompt("Please enter the product price.");
// alert("Thank you.♡");
// let productQuantity = +prompt("How many of this product would you like to purchase?");
// alert("For your information:\n\nIf you purchase more than 500,000 Toman, you will get a 20% discount.\nIf you purchase more than 200,000 Toman, you will get a 10% discount.\nAnd if it is less than 200000 Toman, unfortunately, you will not be eligible for a discount.");
// let price = priceOfProduct * productQuantity;
// let totalPrice = price;
// if(price>500000){
//     totalPrice = price - (price * 0.2);
// }
// else if(price>200000){
//     totalPrice = price - (price * 0.1);
// }
// alert('your final payment price is ' + totalPrice + '\nThank you for your purchase');

//___________________________________________________________________________________________________________________

// "Assignment 2 "

// let getSize = +prompt("Please enter the desired image size without the px suffix.♡");
// let answer = confirm("Would you like to double the image size?");
// let newSize = getSize;
// if(answer){
//     newSize = getSize * 2;
// }
// alert("The new size is equal to " + newSize+ " px.");

//___________________________________________________________________________________________________________________

// "Apply discount to cart" And "isNaN"

// let priceOfProduct = prompt("Please enter the amount in tomans.");
// let price = Number(priceOfProduct);
// if(isNaN(price)){
//     alert("Please enter it as a number.");
// }
// else{
//     if(price===0){
//     console.log("Please purchase a product first.");
//     }
//     else{
//     let checkCode = prompt("Is your discount code a gold one or a silver one?");
//         if(checkCode === "gold"){
//             let discount = price*0.3;
//             let finalPrice = price - discount;
//             console.log(`Your final amount is : ${finalPrice}`);  
//         }
//         else if(checkCode === "silver"){
//             let discount = price*0.15;
//             let finalPrice = price - discount;
//             console.log(`Your final amount is : ${finalPrice}`);
//         }
//         else{
//             console.log("Your discount code is invalid, or you didn't enter a code.");
//         }
//     }
// }

//___________________________________________________________________________________________________________________

// "Switch-case cindditional structure"

// first:
let userRol= admin;
switch(userRol){
    case (admin):
        console.log("You can add person to this company");
        break;
    case (editor):
        console.log("You can edit it however you want");
        break;
    default :
        console.log("Your rank is invalid");
}

//___________________________________________________________________________________________________________________

