// Identify if a Number is Even or Odd
// You are given a variable num Check whether the number is even or odd, without using a function.
var NUM_1 = 25;
if (NUM_1 % 2 == 0) {
    console.log("You are an even number");
}
else if (NUM_1 % 2 == 1) {
    console.log("You are an add number");
}
else {
    console.log("Something Went Wrong");
}
// Filter Expensive Products from an Array :
// You are given an array of product prices. print out  all prices that are higher than a given threshold price, without using a function.
var Products = [{ num: 0, name: "iphone 5", price: 100 }, { num: 1, name: "iphone 6", price: 200 }, { num: 2, name: "iphone 7", price: 300 }, { num: 3, name: "iphone 8", price: 400 }];
var thresholdPrice = 100;
for (var i = 0; i < Products.length; i++) {
    if (Products[i].price > thresholdPrice) {
        console.log(Products[i].price);
    }
}
// Sum All Elements in an Array
// You are given an array of numbers. Iterate through the array and print the sum of all elements , without using a function.
var arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var sum = 0;
for (var i = 0; i < arr_num.length; i++) {
    sum = sum + arr_num[i];
}
console.log("sum of all numbers =", sum);
