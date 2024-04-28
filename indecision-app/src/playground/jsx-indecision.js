console.log("App.js is running!");

//Create app object title/subtitle
//use title/subtitle in the template
//render template

//only render the subtitle (and p tag) if subtitle exist - logical and operator
//render new p tag - if options.lenght > 0 "Here are your options" "No options"

// JSX - JavaScript XML

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
};
const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const onRemoveALL = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumber];
  alert(option);
};

const appRoot = document.getElementById("app");
// create "remove All" button above list
//on click -> wipe the array -> rerender

const numbers = [55, 101, 1000];

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1> {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disable={app.options.length === 0} onClick={onMakeDecision}>
        What should i do?
      </button>
      <button onClick={onRemoveALL}>Remove All</button>
      {numbers.map((number) => {
        return <p key={number}>Number: {number}</p>;
      })}
      <ol>
        {app.options.map((option) => {
          return <li key={option}>Option:{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
    </div>
  );

  const appRoot = document.getElementById("app");
  ReactDOM.render(template, appRoot);
};

render();

//create render function that renders the new jsx
//Call is right away
//Call it after option array added to
