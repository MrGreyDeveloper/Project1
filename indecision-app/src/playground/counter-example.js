

// const user = {
//   name: "Zeljko",
//   age: "27",
//   location: "Njujork",
// };

// function getLocation(location) {
//   if (location) {
//     return <p>Location:{location}</p>;
//   }
// }

// const templateTwo = (
//   <div>
//     <h1> {user.name ? user.name : "Anonymous"}</h1>
//     {user.age && user.age >= 18 && <p> Age: {user.age}</p>}
//     {/* <p> Location: {getLocation(user.location)}</p> */}
//     {getLocation(user.location)}
//   </div>
// );

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
  //subtruck 1 from count - rerender
};
const reset = () => {
  count = 0;
  renderCounterApp();
  //set count to 0 a rerender
};
// const templateTwo = (
//   <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>reset</button>
//   </div>
// );

//Chalenge
//make button "-1" - setup minust one function and register - log"minustOne" every singel time when button is clicked
//Make reset button "reset"-setup reset function - log "reset" every singel time when button is clicked

// function minusOne() {
//   console.log("minusOne");
// }

// const template3 = (
//   <div>
//     <button onClick={minusOne}>-1</button>
//   </div>
// );

//Create a templeTwo var JSX expression
//div
//h1 -> Zeljko Bukvic
//p -> Age: 27
//p -> Location: Trebinje
//Render templateTwo instead of template

// babel src/app.js --out-file=public/scripts/app.js --presets="env,react"

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
