// Array (oderd collection hai jo non primitive data type hota hai )


// problem 
// let proName1 = "t-shirt"
// let proName1Price = 5234

// let proName2 = "bag"
// let proName2Price = 5934

// let proName3 = "table"
// let proName3Price = 5734

// solution 

// let kuchbhi = [ ]  // [] yahi array ka syntax hai 

// let products = ["t-shirt", "bag", "table"]

// console.log(products[0]);  // acces karne ke liye q ki koi bhi chize 0 se suru hota hai isliye 0 laga hai 
// console.log(products[2]);
// console.log(products[1]);

// console.log(products[1] , products[2]);

// console.log(products.length); // kitna chize hai total count karne ke liye 
// console.log(products[products.length -1] ); // last wala ko check karne ke liye
// console.log(products.at(-3))

let products = ["t-shirt", "bag", "table"]

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);


}