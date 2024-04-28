var nameVar = "Zeljko";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// block scoping

const fullName = "Zeljko Bukvic";
let firstName;

if (fullName) {
  let firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);

// function getPetName() {
//   const petName = "Hal";
//   return petName;
// }

// const petName = getPetName();
// console.log(petName);
