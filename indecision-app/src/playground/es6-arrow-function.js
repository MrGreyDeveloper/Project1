// function square(x) {
//   return x * x;
// }
// console.log(square(9));

// // const squareArrow = (x) => {
// //   return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(8));

//Use arrow function
//getFirstName('Mike Smith) -> "mike"
//Create regular arrow function
//Create arrow function using shorthand syntax

const getFirstName = (fullName) => {
  return fullName.split(" ")[0];
};

console.log(getFirstName("Mike Smith"));
