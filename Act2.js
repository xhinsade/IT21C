//Arithmetic and Logical Operators

let value1 = 100;
let value2 = 67;

function DisplaySumValue(sum){
    sum = value1 + value2;
    return sum;
}
function DisplayDifferenceValue(difference){
difference = value1 - value2;
return difference;

}
function DisplayProductValue(product){
    product= value1 * value2;
    return product;
}

function DisplayQuotientValue(quotient ){

   quotient = value1 / value2;
   return quotient;
}
console.log(DisplaySumValue());
console.log(DisplayDifferenceValue());
console.log(DisplayProductValue());
console.log(DisplayQuotientValue());
console.log("------------------------------");

/* Printing the value1 and Value2 using addition, subtraction, multiplication and division and using a return variable */

let Age = 16;

if (Age != 18 ){
    console.log(Age + " Minor")
    }else {
        console.log(Age + "Legal Age");
    }


//Determining if the Age is in Legal Age or Still a Minor



