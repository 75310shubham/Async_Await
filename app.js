// //Synchronus Code

// console.log('My');

// console.log('name');

// console.log('is');

// console.log('James');

// console.log('Bond')

// //Regular Function vs Arrow Function

// function abcd(a,b,c,d){

// };

// let abcde= (a,b,c,d,e) =>{}]

// // function expression
// function xy(x, y) {
//     return x * y;
//  }

// let z= xy();

// let x = function(x, y) {
//     return x * y;
//  }

// // using arrow functions
// let y = (x, y) => x * y;

// console.log()

// //Synchronus Code with setTimeout() in built function, also this is an async function

// console.log('My');

// console.log('name');

// console.log('is');

// setTimeout(()=>{console.log('James Bond');},3000);

// console.log('Bond')

// // Callback means calling a function from a function, it helps in building connection

// // without callback

// function one(){
//     console.log("step 1");
// }

// function two(){
//     console.log("step 2");
// }

// one();
// two();

// // callback

// function one(call_two){
//     console.log("step 1 complete, please call step 2");
//     call_two()
//     // call_two()
//     // console.log("step 1 complete, please call step 2");

// }

// function two(){
//     console.log("step 2");
// }

// one(two);

// //Callback with examples(function)

// let order = ( call_production) => {
//     console.log('Order Placed, Please Call Production')
//     call_production()
// };

// let production =() => {
//     console.log('Order Received, Starting Production')
// };

// order(production);

// // //Callback with examples

// let stocks = {
//   fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let order = (fruit_name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.fruits[fruit_name]} was selected`);

//     call_production();
//   }, 2000);

//   // call_production()
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");

//     setTimeout(() => {
//       console.log("The fruit has been chopped");

//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//         setTimeout(() => {
//           console.log("The Machine has been started");

//           setTimeout(() => {
//             console.log(`ice was placed on ${stocks.holder[0]}`);

//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} was added as toppings`);

//               setTimeout(() => {
//                 console.log("Ice cream is eady to be served");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };

// order("0", production);

// //Promises

// let stocks = {
//   fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let is_shop_open = true;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("our shop is closed"));
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.fruits[0]} is selected`))
//   .then(() => {
//     return order(0000, () => {
//       console.log("production has started");
//     });
//   })

//   .then(() => {
//     return order(2000, () => {
//       console.log("The fruit has been chopped");
//     });
//   })

//   .then(() => {
//     return order(1000, () => {
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
//     });
//   })

//   .then(() => {
//     return order(1000, () => {
//       console.log("The Machine has been started");
//     });
//   })

//   .then(() => {
//     return order(2000, () => {
//       console.log(`ice was placed on ${stocks.holder[0]}`);
//     });
//   })

//   .then(() => {
//     return order(3000, () => {
//       console.log(`${stocks.toppings[0]} was added as toppings`);
//     });
//   })

//   .then(() => {
//     return order(2000, () => {
//       console.log("Ice cream is eady to be served");
//     });
//   })

//   .catch(()=>{
//     console.log("Customer left")
//   })

//   .finally(()=>{
//     console.log('Khatam Tata Bye BYE')
//   })

// //Aync_Await(Theory)

// let toppings_choice= ()=> {
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             resolve(console.log("which topping do you want"));
//         });
//     },0000);
// };

// async function kitchen() {
//   console.log("A");
//   console.log("B");
//   console.log("C");

//   await toppings_choice()
//   console.log("D");
//   console.log("E");
// }

// kitchen()

// console.log("Doing the dishes");
// console.log("Cleaning the tables");
// console.log("Taking others orders")

// //Async_Await(Examples)

// let stocks = {
//   fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let is_shop_open = true;

// function time(ms) {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(resolve, ms);
//     } else {
//       reject(console.log("shop is closed"));
//     }
//   });
// }

// async function kitchen() {
//   try {
//     await time(2000);
//     console.log(`${stocks.fruits[0]}`);

//     await time(0000);
//     console.log("production has started");

//     await time(2000);
//     console.log("The fruit has been chopped");

//     await time(1000);
//     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//     await time(1000);
//     console.log("The Machine has been started");

//     await time(1000);
//     console.log(`ice was placed on ${stocks.holder[0]}`);

//     await time(3000);
//     console.log(`${stocks.toppings[0]} was added as toppings`);

//     await time(2000);
//     console.log("Ice cream is eady to be served");


//   } catch (error) {
//     console.log("Customer left", error);
//   } finally {
//     console.log("Day ended, shop is closed");
//   }
// }

// kitchen();
