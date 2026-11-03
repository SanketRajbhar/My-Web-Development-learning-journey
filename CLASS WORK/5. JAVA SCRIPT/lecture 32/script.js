
// khud ki banai hui hai 

// function convertTopositiveNumber(num) {
//     return num * -1;
// }
// let posiiveNumber = convertTopositiveNumber(-10)
// console.log(posiiveNumber);


// bani banai math objects (for mathametical opration)

// let posiiveNumber2 = Math.abs(-10)  // abs ka matlab absolute (negative ko positive bana deta hai)
// console.log(posiiveNumber2);

// console.log(Math.PI);

// console.log(Math.pow(2 , 3));
// console.log(2 ** 3);

// console.log(Math.sqrt(16));

// console.log(Math.min(2,4,6,7));
// console.log(Math.max(2,4,6,7));

// console.log(Math.round(3.6));   // .5 se jada hoga to 1+ ho jata hai (round ka matlab decimaal ko delete karna )
// console.log(Math.round(6.2));
// console.log(Math.round(5.3));
// console.log(Math.round(1.9));
// console.log(Math.round(9.7));

// console.log(Math.round(2.63868));

// console.log(Math.ceil(4.2));   // . ke age kuch bhi ho to 1+ kaer lega
// console.log(Math.floor(5.7));    // jo hai wahi rahega . hata dega


// console.log(Math.random());        // random value dega (hamesa 0. me dega)
// console.log(Math.random() + 1);    // +1 add karne se random value 1.6578 me aayega


// let result = Math.floor(Math.random() + 1)
// console.log(result);


// min max tak number kaise laye like ludo 
// let min = 1
// let max = 6 
// let result =  Math.floor(Math.random() * (max - min + 1)) + min
// console.log(result);


// console.log(Number.isFinite(Infinity));
// console.log(Number.parseInt("56"));  // sting me bhi number print kara ke dega 
// console.log("56");

// // example 
// let num1 = "45"   // backend se aata hai
// let num2 = "55"   // backend se aata hai

// console.log(num1 + num2);    // wrong way to print (2 sting ko add kiya ja raha jisse + nhi hoga value 4555 aayega )
// console.log(parseInt(num1) + parseInt(num2));    // write way to print

// let num = 423.7387
// // console.log(num.toFixed(2));    // decimal hata dega () <-- khali raha to agr () <-- me 2 daal de to . ke baad 2 digit hoga like 423.73 (ye sting returne karta hai )
// console.log(num.toPrecision(4));


// console.log("sanket".toUpperCase);

// let email = "example@email.com"
// console.log(email.includes("@email.com")); /// paragraph ke under @email.com likha hai ya nhi (true false check karne ke liye)
// console.log(email.includes("@") && email.includes("."));

// let fileName = "image.png"
// console.log(fileName.endsWith(".png"));

// let greet = "hello bhai kya hal chal hello bhai"
// console.log(greet.replace("hello", "hii"));  // hello ki jaga hii hota hai 1 jaga 
// console.log(greet.replaceAll("hello", "hii"));  // hello ki jaga hii hota hai all jaga 


// date 

// console.log(Date.now()); // 1793259091637 aisa aayega unix timestamp hai

// let date = new Date()

// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.toLocaleDateString());
