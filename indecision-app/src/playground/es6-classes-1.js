// Setup constructor to take name and age (default to 0)
// getDescription - Zeljko Bukvic is 27 year(s) old.

class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    //return "Hi. I am" + this.name + "!";
    return `Hi. I am ${this.name}!`;
  }
  getDestrciption() {
    return ` ${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDestrciption() {
    let description = super.getDestrciption();

    if (this.hasMajor()) {
      description += `This major is ${this.major}.`;
    }

    return description;
  }
}

// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi. I am Zeljko Bukvic. I am visiting from New York.
// 2. Hi. I am Zeljko Bukvic

//greska ne gledaj
// class Traveler extends Person {
//   constructor(name, age, homeLocation) {
//     super(name, age);
//     this.homeLocation = homeLocation;
//   }
//   getGretting() {
//     return `Hi. I'm Zeljko Bukvic. I am visting ${this.homeLocation}`;
//   }
// }

// const me = new Traveler("Zeljko Bukvic", 27, "Computer Science", "NewYork");
// console.log(me.getGretting);

// const other = new Traveler();
// console.log(other.getGretting);
