// Determining if the number is Odd or Even

let numValue = 113;

if (numValue % 2 == 0) {

console.log("Even:" + numValue);
}
else {
    console.log("Odd:" + numValue);
}
console.log("-------------------");

//Determining if the number is Prime Number

let number = 110;
if (number <= 1 && numValue % 2 ===0 && numValue % 3 ===0){
    console.log(numValue + "is not a prime number");
} else {
    console.log(number+ " is a prime number");
}
console.log("---------------------");

//Determining if the string is a palindrome
let word = "madam";
let letters = word.split("");
let reversedLetters = letters.reverse();
let reversedword = reversedLetters.join("");

if (word.toLowerCase() == reversedword) {
    console.log(word + " Is a palindrome");
} else {
    console.log(word + "Is not a palindrome ");
}